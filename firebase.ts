// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChSjO2fPLZdZVb-juaSMgfZV6rgE13CII",
  authDomain: "dv300-class-firebase-authent.firebaseapp.com",
  projectId: "dv300-class-firebase-authent",
  storageBucket: "dv300-class-firebase-authent.firebasestorage.app",
  messagingSenderId: "927498854971",
  appId: "1:927498854971:web:5c836d37dba05e5965321e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// TODO: Initialise Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
