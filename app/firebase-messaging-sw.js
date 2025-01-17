importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgg89ieXivvuboPyCVXNl3tdzK8NU5hzQ",
  authDomain: "boycott-woke.firebaseapp.com",
  projectId: "boycott-woke",
  storageBucket: "boycott-woke.firebasestorage.app",
  messagingSenderId: "576100726770",
  appId: "1:576100726770:web:2cbcb634b4a1b9eb63dd6b",
  measurementId: "G-TX2VCYCB1X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
