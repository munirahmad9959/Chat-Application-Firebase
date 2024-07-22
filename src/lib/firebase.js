import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "react-chat-app-21305.firebaseapp.com",
    projectId: "react-chat-app-21305",
    storageBucket: "react-chat-app-21305.appspot.com",
    messagingSenderId: "753952184828",
    appId: "1:753952184828:web:303d5c99585566df4f3a79"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore()
export const storage = getStorage()