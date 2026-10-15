import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const requiredEnvironment = {
  apiKey: "EXPO_PUBLIC_FIREBASE_API_KEY",
  authDomain: "EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN",
  projectId: "EXPO_PUBLIC_FIREBASE_PROJECT_ID",
  storageBucket: "EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
  appId: "EXPO_PUBLIC_FIREBASE_APP_ID",
};

function loadEnvironmentFile(fileName) {
  if (!existsSync(fileName)) {
    return;
  }

  for (const line of readFileSync(fileName, "utf8").split(/\r?\n/u)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/u);
    if (!match || process.env[match[1]]) {
      continue;
    }
    process.env[match[1]] = match[2].replace(/^['"]|['"]$/gu, "");
  }
}

// Expo reads these at app-bundle time. The service worker is a standalone file, so
// load the same local files here without adding configuration to source control.
loadEnvironmentFile(".env.local");
loadEnvironmentFile(".env");

const firebaseConfig = Object.fromEntries(
  Object.entries(requiredEnvironment).map(([configKey, environmentKey]) => [
    configKey,
    process.env[environmentKey],
  ]),
);

const missing = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => requiredEnvironment[key]);

if (missing.length > 0) {
  console.error(
    `Cannot generate the Firebase Messaging service worker. Missing: ${missing.join(", ")}`,
  );
  process.exit(1);
}

const outputPath = resolve("public/firebase-messaging-sw.js");
mkdirSync(dirname(outputPath), { recursive: true });

const worker = `/* Generated locally. This file is ignored; do not commit Firebase configuration. */
importScripts("https://www.gstatic.com/firebasejs/13.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/13.0.0/firebase-messaging-compat.js");

firebase.initializeApp(${JSON.stringify(firebaseConfig, null, 2)});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {};
  self.registration.showNotification(notification.title || "Security alert", {
    body: notification.body || "A security-related event needs your review.",
    icon: "/favicon.ico",
    tag: "securewealth-security-alert",
    data: { url: "/notifications" },
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data?.url || "/notifications"));
});
`;

writeFileSync(outputPath, worker, { encoding: "utf8", mode: 0o600 });
console.log(`Generated ${outputPath}`);
