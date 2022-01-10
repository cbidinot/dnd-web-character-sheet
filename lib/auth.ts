import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signOut, User } from 'firebase/auth';
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

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

/**
 * Restricts the page to authenticated users only, redirectes unauthenticated users to the login page.
 * 
 * @returns User object and loading boolean
 */
export const useAuthRequeriment = (): [(User | null | undefined), boolean] => {

    const router = useRouter();
    const [ user, loading ] = useAuthState(auth);

    useEffect(() => {
        if(!(user || loading)) {
            router.push('/login');
        };
    }, [user, loading]);

    return [ user, loading ];
}
