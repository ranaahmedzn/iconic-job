// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFcIL2vloQTxQBbSh51UsKSS0ZX4ONmVs",
  authDomain: "iconic-job.firebaseapp.com",
  projectId: "iconic-job",
  storageBucket: "iconic-job.appspot.com",
  messagingSenderId: "54538690548",
  appId: "1:54538690548:web:d91c43d7871f4681eba3a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;