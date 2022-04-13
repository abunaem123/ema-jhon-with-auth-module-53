// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9bqu9wXxekbreTNURBoQuEVnukOPKTM8",
  authDomain: "ema-jhon-simple-31533.firebaseapp.com",
  projectId: "ema-jhon-simple-31533",
  storageBucket: "ema-jhon-simple-31533.appspot.com",
  messagingSenderId: "714459882928",
  appId: "1:714459882928:web:dbd4481d7466c8f16aa275"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;