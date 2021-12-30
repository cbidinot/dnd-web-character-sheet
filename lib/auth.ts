import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useRouter } from "next/router";

/**
 * Signs user in with GoogleAuthProvider
 */
export const signInWithGooglePopup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
};

/**
 * Signs out the user
 */
export const signOutFunc = () => {
    
    signOut(auth);
}
