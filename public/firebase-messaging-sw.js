/* Generated locally. This file is ignored; do not commit Firebase configuration. */
importScripts("https://www.gstatic.com/firebasejs/13.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/13.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  "apiKey": "dummy",
  "authDomain": "dummy",
  "projectId": "dummy",
  "storageBucket": "dummy",
  "messagingSenderId": "dummy",
  "appId": "dummy"
});

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
