import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAUU2-moL66wqr254NKxID-NiqyBAMnluo",
  authDomain: "exercise-6-85bd7.firebaseapp.com",
  projectId: "exercise-6-85bd7",
  storageBucket: "exercise-6-85bd7.appspot.com",
  messagingSenderId: "679019607126",
  appId: "1:679019607126:web:9def4be7c2afa5caf137f7"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app)