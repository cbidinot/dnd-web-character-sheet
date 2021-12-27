import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import styles from '../styles/components/UserSectionHeader.module.scss';
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const UserSectionHeader: React.FC<{ toggleDropdown: ()=>void, setUserSectionWidth: Dispatch<SetStateAction<number>>}> = (props) => {

    let userSectionRef: HTMLDivElement | null = null;
    const [user]:any[] = useAuthState(auth);

    const calcWidth = (): any => {
        if(userSectionRef)
        return getComputedStyle(userSectionRef).getPropertyValue('width')
    };
    
    useEffect(() => {
        if(userSectionRef) {
           userSectionRef.clientWidth ? props.setUserSectionWidth(calcWidth()) : null 
        }
    }, [ userSectionRef ]);

    return (
        <div className={styles.userSectionHeader} onMouseOver={props.toggleDropdown} onMouseOut={props.toggleDropdown} ref={node => { userSectionRef = node; }} > 
            <img src={ user.photoURL ? user.photoURL : './pfp.png'} alt='Profile picture' />
            <span>{user.displayName}</span>
        </div>
    );
};
export default UserSectionHeader;