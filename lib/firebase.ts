import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, initializeAnalytics } from "firebase/analytics";

import { connectFirestoreEmulator, getFirestore, enableMultiTabIndexedDbPersistence } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCw1KXn0qFPY7DbWYoE4-DfLIGtMC0zjKM",
  authDomain: "dnd-web-character-sheet.firebaseapp.com",
  projectId: "dnd-web-character-sheet",
  storageBucket: "dnd-web-character-sheet.appspot.com",
  messagingSenderId: "582137489365",
  appId: "1:582137489365:web:b1dcad90139489a9d27f5c",
  measurementId: "G-9EES7SN48W"
};

if(!getApps().length) {
  initializeApp(firebaseConfig);
};

export const db = getFirestore(); 
export const auth = getAuth();

if(location.hostname === 'localhost') {
  connectFirestoreEmulator(db, 'localhost', 8080);
  console.log("Connecting emulator for Firestore");
  connectAuthEmulator(auth, 'http://localhost:9099');
  console.log("Connecting emulator for Authentication");
} 

enableMultiTabIndexedDbPersistence(db)
  .catch((error) => {
    if(error.code =='failed-precondition') {
      window.alert(error.code)

    } else if(error.code == 'unimplemented') {
      window.alert(`Your browser does not support the features required to run this app. Code: ${error.code}`,)
    };
    window.location.replace(`${window.location.hostname}/unsupported`)
  });