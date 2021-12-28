import { signOutFunc } from "../lib/auth";
import styles from "../styles/components/SignOut.module.scss";

export default function SignOut() { 

    return <li onClick={signOutFunc} tabIndex={0} onKeyPress={(e) => {if(e.key == 'Enter') signOutFunc()}} className={styles.signOut} >Sign Out</li>
};