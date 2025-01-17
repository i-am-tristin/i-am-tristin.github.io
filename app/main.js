// Import and initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getMessaging, getToken, onMessage } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js';

const firebaseConfig = {
  apiKey: "AIzaSyCgg89ieXivvuboPyCVXNl3tdzK8NU5hzQ",
  authDomain: "boycott-woke.firebaseapp.com",
  projectId: "boycott-woke",
  storageBucket: "boycott-woke.firebasestorage.app",
  messagingSenderId: "576100726770",
  appId: "1:576100726770:web:2cbcb634b4a1b9eb63dd6b",
  measurementId: "G-TX2VCYCB1X"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request notification permission
document.getElementById('subscribe').addEventListener('click', async () => {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    getToken(messaging, { vapidKey: 'BEd4pnEuIg3AZ3lfk-Cd5it-gI4i3HqjGOxKWP0dN6JDQquEAppV4C3iGR3K111OHehRaZPZLNO7mOGT_N253RU' })
      .then((currentToken) => {
        if (currentToken) {
          console.log('FCM Token:', currentToken);
          alert('Notification permission granted. Token generated!');
          // Send the token to your server for future use
        } else {
          console.log('No registration token available.');
        }
      })
      .catch((err) => {
        console.error('An error occurred while retrieving the token.', err);
      });
  } else {
    alert('Notification permission denied.');
  }
});

// Handle foreground messages
onMessage(messaging, (payload) => {
  console.log('Message received in foreground: ', payload);
  alert(payload.notification.title + ': ' + payload.notification.body);
});
