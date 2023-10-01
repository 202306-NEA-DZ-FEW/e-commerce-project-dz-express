// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7O0kVn7ah4ifzAqNYvyoMRv9Ficq6guY",
  authDomain: "dz-express-c5866.firebaseapp.com",
  projectId: "dz-express-c5866",
  storageBucket: "dz-express-c5866.appspot.com",
  messagingSenderId: "845319149336",
  appId: "1:845319149336:web:dc2c694c80ed491ee9f06d",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
