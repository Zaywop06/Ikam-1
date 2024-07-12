// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmL-Ig2pQjRr3bMq0OZPgrNq1D5cyIMYg",
  authDomain: "ikam-multitienda.firebaseapp.com",
  projectId: "ikam-multitienda",
  storageBucket: "ikam-multitienda.appspot.com",
  messagingSenderId: "1035183332106",
  appId: "1:1035183332106:web:ab7f87e513426e8d35b8f3",
  measurementId: "G-MLPG9FYYD8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);