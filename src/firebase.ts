import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi8sZHDJO8Rzy0x71exXOH_7BT2qAzjG4",
  authDomain: "library-52670.firebaseapp.com",
  projectId: "library-52670",
  storageBucket: "library-52670.appspot.com",
  messagingSenderId: "742571359890",
  appId: "1:742571359890:web:fd5251122a6fc996e1b04b"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

export const db=getFirestore(app);