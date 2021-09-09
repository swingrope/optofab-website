// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV6XF5utQ4W-vwow6c4vCoCA6ul7sSjO8",
  authDomain: "optofabtest.firebaseapp.com",
  projectId: "optofabtest",
  storageBucket: "optofabtest.appspot.com",
  messagingSenderId: "872109558752",
  appId: "1:872109558752:web:f6d2a92aa678ce03b4f985",
  measurementId: "G-XESX87SZ37",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let instance;

export default function getFirebase() {
  // only init when there's a window
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = initializeApp(firebaseConfig);
    return instance;
  }
  return null;
}
