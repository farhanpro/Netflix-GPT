// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLgEYrsSc0PVhpJ7eld96YyWsm4ct61jI",
  authDomain: "netflixgpt-6c6dd.firebaseapp.com",
  projectId: "netflixgpt-6c6dd",
  storageBucket: "netflixgpt-6c6dd.appspot.com",
  messagingSenderId: "850172755181",
  appId: "1:850172755181:web:4237dca93ea58d6eabe0e4",
  measurementId: "G-PW8WZ5JRYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);