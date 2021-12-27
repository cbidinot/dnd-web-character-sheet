import { signOutFunc } from "../lib/auth";
import styles from '../styles/components/SignInSignOut.module.scss';

export default function SignOut() {
    return <li onClick={signOutFunc}>Sign Out</li>
};