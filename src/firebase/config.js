// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_REACT_APP_APIKeyFB,
  authDomain:        import.meta.env.VITE_REACT_APP_authDomainFB,
  projectId:         import.meta.env.VITE_REACT_APP_projectIdFB,
  storageBucket:     import.meta.env.VITE_REACT_APP_storageBucketFB,
  messagingSenderId: import.meta.env.VITE_REACT_APP_messagingSenderIdFB,
  appId:             import.meta.env.VITE_REACT_APP_appIdFB,
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FiseBaseDB = getFirestore(FireBaseApp);