
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "prepvault-3377c.firebaseapp.com",
  projectId: "prepvault-3377c",
  storageBucket: "prepvault-3377c.firebasestorage.app",
  messagingSenderId: "1021832157665",
  appId: "1:1021832157665:web:be32d0a512a94b4d159aa0"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}