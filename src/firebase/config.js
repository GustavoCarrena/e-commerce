import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsQijhXL_ex-vNZMpAxTXwWqvbpHvrG3Q",
  authDomain: "reactjs-e-commerce-a0e6d.firebaseapp.com",
  projectId: "reactjs-e-commerce-a0e6d",
  storageBucket: "reactjs-e-commerce-a0e6d.appspot.com",
  messagingSenderId: "41742513458",
  appId: "1:41742513458:web:fdcada92815a55cf98932b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);