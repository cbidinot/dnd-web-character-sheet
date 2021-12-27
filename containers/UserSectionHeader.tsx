import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import SignIn from "../components/SignIn";
import styles from '../styles/containers/UserSectionHeader.module.scss';

const UserSectionHeader: React.FC<{ toggleDropdown: ()=>void}> = (props) => {

    const [user] = useAuthState(auth);

    return (
        <>
            {user ? (
                <div className={styles.userSectionHeader} onMouseOver={props.toggleDropdown} onMouseOut={props.toggleDropdown} > 
                    <img src={ user.photoURL ? user.photoURL : './pfp.png'} alt='Profile picture' />
                    <span>{user.displayName}</span>
                </div>
            ) : <SignIn/>}
            
        </>
    );
};
export default UserSectionHeader;