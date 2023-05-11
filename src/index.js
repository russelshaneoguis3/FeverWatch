// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnNVNMvhv8GsziO7itIZ3Y8wXkgpxWcMc",
  authDomain: "feverwatch-87773.firebaseapp.com",
  projectId: "feverwatch-87773",
  storageBucket: "feverwatch-87773.appspot.com",
  messagingSenderId: "377834979816",
  appId: "1:377834979816:web:16a15fdab1d32b94f0a45d",
  measurementId: "G-LBRMBDYJQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);