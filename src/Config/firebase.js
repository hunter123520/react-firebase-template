// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPMK0oQaDYfUhrUKrHtzQUF5Yge_G3OL0",
    authDomain: "main-template-5e53b.firebaseapp.com",
    projectId: "main-template-5e53b",
    storageBucket: "main-template-5e53b.appspot.com",
    messagingSenderId: "323009729376",
    appId: "1:323009729376:web:06e9fb6eaf654611cac405",
    measurementId: "G-SV0SL22XHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);