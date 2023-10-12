// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage   } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5I2HD2mow3MiIKZoVI4JFITg5Vdouvvg",
  authDomain: "client-resturent1.firebaseapp.com",
  projectId: "client-resturent1",
  storageBucket: "client-resturent1.appspot.com",
  messagingSenderId: "555014790342",
  appId: "1:555014790342:web:e2cbfb0a487d9aeb780bc7",
  measurementId: "G-7VKEFVRY4M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);