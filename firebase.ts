// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDq8JMlIQJKxCAxF01rjZqFwEl2RixiX0",
  authDomain: "ahlan-archive-e4255.firebaseapp.com",
  projectId: "ahlan-archive-e4255",
  storageBucket: "ahlan-archive-e4255.appspot.com",
  messagingSenderId: "491297863440",
  appId: "1:491297863440:web:0b940995a2df8db7b15795",
  measurementId: "G-2SD2XEKFLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);