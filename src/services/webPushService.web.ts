import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type User } from "firebase/auth";
import {
  deleteToken,
  getMessaging,
  getToken,
  isSupported,
  onMessage,
  type Messaging,
} from "firebase/messaging";

import { APP_CONFIG } from "@/constants";

export type WebPushStatus =
  | "enabled"
  | "disabled"
  | "unsupported"
  | "not-configured"
  | "sign-in-required"
  | "permission-required"
  | "permission-denied"
  | "error";

export type WebPushResult = {
  status: WebPushStatus;
  message: string;
};

const SERVICE_WORKER_PATH = "/firebase-messaging-sw.js";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

const vapidKey = process.env.EXPO_PUBLIC_FIREBASE_VAPID_KEY;

let foregroundUnsubscribe: (() => void) | undefined;

function configured(): boolean {
  return Boolean(
    firebaseConfig.apiKey &&
      firebaseConfig.authDomain &&
      firebaseConfig.projectId &&
      firebaseConfig.storageBucket &&
      firebaseConfig.messagingSenderId &&
      firebaseConfig.appId &&
      vapidKey,
  );
}

function configError(): WebPushResult {
  return {
    status: "not-configured",
    message:
      "Browser notifications have not been configured for this environment yet.",
  };
}

function browserCanRequestPush(): boolean {
  return Boolean(
    typeof window !== "undefined" &&
      "Notification" in window &&
      "serviceWorker" in navigator &&
      "PushManager" in window,
  );
}

function firebaseApp(): FirebaseApp {
  if (!configured()) {
    throw new Error("Firebase web configuration is incomplete.");
  }

  return getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
}

function currentFirebaseUser(): User | null {
  return getAuth(firebaseApp()).currentUser;
}

async function messagingForBrowser(): Promise<Messaging> {
  if (!(await isSupported())) {
    throw new Error("This browser does not support Firebase Cloud Messaging.");
  }

  await navigator.serviceWorker.register(SERVICE_WORKER_PATH, { scope: "/" });
  await navigator.serviceWorker.ready;
  return getMessaging(firebaseApp());
}

async function sendAuthenticatedTokenRequest(
  method: "POST" | "DELETE",
  registrationToken: string,
  idToken: string,
): Promise<void> {
  const response = await fetch(
    `${APP_CONFIG.API.BASE_URL.replace(/\/$/, "")}/notifications/devices`,
    {
      method,
      headers: {
        Authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: registrationToken, platform: "web" }),
    },
  );

  if (!response.ok) {
    throw new Error("The notification registration service rejected the request.");
  }
}

async function registerCurrentBrowserToken(): Promise<WebPushResult> {
  if (!configured()) {
    return configError();
  }

  if (!browserCanRequestPush()) {
    return {
      status: "unsupported",
      message: "This browser cannot receive SecureWealth browser notifications.",
    };
  }

  if (Notification.permission !== "granted") {
    return {
      status:
        Notification.permission === "denied"
          ? "permission-denied"
          : "permission-required",
      message:
        Notification.permission === "denied"
          ? "Browser notifications are blocked. Change the site permission in your browser to enable them."
          : "Choose Enable browser fraud alerts to grant notification permission.",
    };
  }

  const user = currentFirebaseUser();
  if (!user) {
    return {
      status: "sign-in-required",
      message: "Sign in with Firebase Authentication before enabling browser alerts.",
    };
  }

  try {
    const messaging = await messagingForBrowser();
    const registrationToken = await getToken(messaging, { vapidKey });

    if (!registrationToken) {
      return {
        status: "error",
        message: "A browser registration token was not returned.",
      };
    }

    await sendAuthenticatedTokenRequest(
      "POST",
      registrationToken,
      await user.getIdToken(),
    );

    return {
      status: "enabled",
      message: "Browser fraud alerts are enabled for this signed-in account.",
    };
  } catch (error) {
    console.warn("Unable to synchronize browser notification registration.", error);
    return {
      status: "error",
      message: "Browser alerts could not be enabled. Please try again.",
    };
  }
}

export async function enableWebPushNotifications(): Promise<WebPushResult> {
  if (!configured()) {
    return configError();
  }

  if (!browserCanRequestPush()) {
    return {
      status: "unsupported",
      message: "This browser cannot receive SecureWealth browser notifications.",
    };
  }

  // This is invoked directly from the user's fraud-alert toggle. Keep the permission
  // request before any asynchronous work so browsers retain the user activation.
  const user = currentFirebaseUser();
  if (!user) {
    return {
      status: "sign-in-required",
      message: "Sign in with Firebase Authentication before enabling browser alerts.",
    };
  }

  if (Notification.permission === "default") {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      return {
        status: permission === "denied" ? "permission-denied" : "permission-required",
        message:
          "Notification permission was not granted. You can enable it later from this setting.",
      };
    }
  }

  return registerCurrentBrowserToken();
}

export async function syncWebPushRegistration(): Promise<WebPushResult> {
  return registerCurrentBrowserToken();
}

export async function getFirebaseAuthIdToken(): Promise<string | undefined> {
  if (!configured()) {
    return undefined;
  }

  const user = currentFirebaseUser();
  return user ? user.getIdToken() : undefined;
}

export async function disableWebPushNotifications(): Promise<WebPushResult> {
  if (!configured() || !browserCanRequestPush()) {
    return { status: "disabled", message: "Browser alerts are not active." };
  }

  try {
    const messaging = await messagingForBrowser();
    const user = currentFirebaseUser();
    const registrationToken =
      Notification.permission === "granted"
        ? await getToken(messaging, { vapidKey })
        : undefined;

    let serverRemovalFailed = false;
    if (registrationToken && user) {
      try {
        await sendAuthenticatedTokenRequest(
          "DELETE",
          registrationToken,
          await user.getIdToken(),
        );
      } catch (error) {
        serverRemovalFailed = true;
        console.warn("Unable to remove browser notification registration from server.", error);
      }
    }

    // Delete the local subscription even if the network is unavailable. This prevents
    // the next browser user from receiving alerts for the previous session.
    await deleteToken(messaging);

    return serverRemovalFailed
      ? {
          status: "error",
          message:
            "Browser alerts were removed locally, but server cleanup could not be confirmed.",
        }
      : { status: "disabled", message: "Browser fraud alerts are disabled." };
  } catch (error) {
    console.warn("Unable to disable browser notification registration.", error);
    return {
      status: "error",
      message: "Browser alerts could not be disabled cleanly. Please try again.",
    };
  }
}

async function subscribeToForegroundMessages(): Promise<void> {
  if (
    foregroundUnsubscribe ||
    !configured() ||
    !browserCanRequestPush() ||
    Notification.permission !== "granted"
  ) {
    return;
  }

  try {
    const messaging = await messagingForBrowser();
    foregroundUnsubscribe = onMessage(messaging, () => {
      // Keep foreground notifications generic as well. Details belong only inside
      // the authenticated app experience, not in an OS-level push payload.
      new Notification("Security alert", {
        body: "A SecureWealth activity needs your review.",
        tag: "securewealth-security-alert",
      });
    });
  } catch (error) {
    console.warn("Unable to subscribe to foreground browser notifications.", error);
  }
}

export function startWebPushAutoSync(): () => void {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const synchronize = () => {
    void syncWebPushRegistration();
    void subscribeToForegroundMessages();
  };

  synchronize();
  const onVisibilityChange = () => {
    if (document.visibilityState === "visible") {
      synchronize();
    }
  };

  document.addEventListener("visibilitychange", onVisibilityChange);
  return () => {
    document.removeEventListener("visibilitychange", onVisibilityChange);
    foregroundUnsubscribe?.();
    foregroundUnsubscribe = undefined;
  };
}
