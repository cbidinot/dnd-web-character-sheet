import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import SignOut from "../components/SignOut";
import SignIn from "../components/SignIn";
import Image from "next/image";
import styles from '../styles/containers/UserSectionHeader.module.scss';
import { useState } from "react";
import DropdownMenu from "../components/DropdownMenu";

export default function UserSectionHeader() {

    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [user] = useAuthState(auth);

    return (
        <>
            {user ? (
                <div className={styles.userSectionHeader}> 
                    <div className={styles.pfpContainer}>
                        <Image src={user.photoURL ? user.photoURL : '/pfp.png' } width={150} height={150} alt='Profile picture' layout="intrinsic" />   
                    </div>
                    <span>{user.displayName}</span>
                    <DropdownMenu/>
                </div>
            ) : <SignIn/>}
            
        </>
    );
};