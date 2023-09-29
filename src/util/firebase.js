// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmi_326SkWXLDNqOl-NR_rA16PHqeHGjg",
  authDomain: "e-commerce-project-55023.firebaseapp.com",
  projectId: "e-commerce-project-55023",
  storageBucket: "e-commerce-project-55023.appspot.com",
  messagingSenderId: "515723882425",
  appId: "1:515723882425:web:1c340369564943e38d5068",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
