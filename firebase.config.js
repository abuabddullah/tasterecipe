// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWc9DcPL_fcg_HV3PEpETAUJKhQTzK6eI",
  authDomain: "tasterecipe-4bec6.firebaseapp.com",
  projectId: "tasterecipe-4bec6",
  storageBucket: "tasterecipe-4bec6.appspot.com",
  messagingSenderId: "210302322330",
  appId: "1:210302322330:web:f23a0a44df916c62e8c123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;