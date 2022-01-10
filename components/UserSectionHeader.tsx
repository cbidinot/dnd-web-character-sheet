import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import styles from '../styles/components/UserSectionHeader.module.scss';
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const UserSectionHeader: React.FC<{ toggleDropdownFocus: ()=>void, dropdownActive: boolean, toggleDropdown: ()=>void, setUserSectionWidth: Dispatch<SetStateAction<number>>}> = (props) => {

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
        <div className={`${styles.userSectionHeader} ${ props.dropdownActive ? styles.arrowActive : styles.arrowUnactive }`} onMouseEnter={props.toggleDropdown} onMouseLeave={props.toggleDropdown}
         ref={node => { userSectionRef = node; }} tabIndex={0} onFocus={props.toggleDropdownFocus} onBlur={props.toggleDropdownFocus} >
            {/* <img src='/vectors/arrow.svg' className={`${styles.menuArrow} ${ props.dropdownActive ? styles.arrowActive : styles.arrowUnactive }`} />  */}
            <img src={ user.photoURL ? user.photoURL : '/pfp.png'} alt='Profile picture' className={styles.pfp} />
            <span>{user.displayName ? user.displayName : 'User'}</span>
        </div>
    );
};
export default UserSectionHeader;