import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyCV9w-7kx1yc3cMhLUaW_XfOQhIcW3624A",
  authDomain: "pig-2-new-code.firebaseapp.com",
  databaseURL: "https://pig-2-new-code.firebaseio.com",
  projectId: "pig-2-new-code",
  storageBucket: "pig-2-new-code.appspot.com",
  messagingSenderId: "115464168485",
  appId: "1:115464168485:web:866e514fc90851b9af0bcc",
  measurementId: "G-8L435JEBFL"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
