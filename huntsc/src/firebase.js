// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firstore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC0st4hltW5nfWR4yuI_sCfVRJonTmbuc",
  authDomain: "huntsc-2d9ab.firebaseapp.com",
  projectId: "huntsc-2d9ab",
  storageBucket: "huntsc-2d9ab.appspot.com",
  messagingSenderId: "875546344201",
  appId: "1:875546344201:web:c898ce822884c7f91cb1d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);