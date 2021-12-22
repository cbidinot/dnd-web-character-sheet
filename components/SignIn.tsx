import { signInWithGooglePopup } from "../lib/auth";
import style from '../styles/components/SignInSignOut.module.scss';

export default function SignIn() {
    return <button onClick={signInWithGooglePopup} className={style.button} ><img src='./vectors/google.svg'/><span>Sign in with Google</span></button>;
};