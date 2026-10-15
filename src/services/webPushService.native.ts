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

const nativeResult: WebPushResult = {
  status: "unsupported",
  message:
    "Browser push notifications are available only in the supported web build.",
};

export async function enableWebPushNotifications(): Promise<WebPushResult> {
  return nativeResult;
}

export async function disableWebPushNotifications(): Promise<WebPushResult> {
  return { status: "disabled", message: "Browser push is not active on this platform." };
}

export async function syncWebPushRegistration(): Promise<WebPushResult> {
  return nativeResult;
}

export async function getFirebaseAuthIdToken(): Promise<string | undefined> {
  return undefined;
}

export function startWebPushAutoSync(): () => void {
  return () => undefined;
}
