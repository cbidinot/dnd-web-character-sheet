import { signOutFunc } from "../lib/auth";
import styles from '../styles/components/SignInSignOut.module.scss';

export default function SignOut() {
    return <button className={styles.button} onClick={signOutFunc}><span>Sign Out</span></button>
};