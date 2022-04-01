import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_CONFIG } from "./firebaseConfig.js";

const firebaseConfig = FIREBASE_CONFIG;

const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);

// Firestore
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
