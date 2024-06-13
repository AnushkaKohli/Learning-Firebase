import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-tutorial-e8da1.firebaseapp.com",
  projectId: "fir-tutorial-e8da1",
  storageBucket: "fir-tutorial-e8da1.appspot.com",
  messagingSenderId: "126400265690",
  appId: "1:126400265690:web:05c719646d8a7e71bd54e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
