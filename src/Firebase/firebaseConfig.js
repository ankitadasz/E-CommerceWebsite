import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyC4EMM5MT1UysV1Itn_R6hei1Ap1QiEo",
  authDomain: "anke-ecommerce.firebaseapp.com",
  projectId: "anke-ecommerce",
  storageBucket: "anke-ecommerce.firebasestorage.app",
  messagingSenderId: "1000925175012",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);