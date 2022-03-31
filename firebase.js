import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3Wx6TEgW5NCfOnjMmbZ72d01fKzxCysI",
  authDomain: "instagram-clone-rn-7aac5.firebaseapp.com",
  projectId: "instagram-clone-rn-7aac5",
  storageBucket: "instagram-clone-rn-7aac5.appspot.com",
  messagingSenderId: "662145981705",
  appId: "1:662145981705:web:69a7e9920d5ade88ea87d8",
  measurementId: "G-TW2LPDFC7J",
};

const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);

// Firestore
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
