import { useRouter } from "next/router";
import { signOutFunc } from "../lib/auth";
import styles from "../styles/components/SignOut.module.scss";

export default function SignOut() { 

    const router = useRouter();
    
    return <li onClick={() => {signOutFunc(); if(router.pathname !== '/') router.push('/');}} tabIndex={0} onKeyPress={(e) => {if(e.key == 'Enter') {signOutFunc(); if(router.pathname !== '/') router.push('/');}}} className={styles.signOut} >Sign Out</li>
};