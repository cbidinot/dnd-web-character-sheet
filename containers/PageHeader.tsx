import UserSectionHeader from '../components/UserSectionHeader';
import styles from '../styles/containers/pageHeader.module.scss';
import DropdownMenu from '../components/DropdownMenu';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import SignIn from '../components/SignIn';

const PageHeader: React.FC<{type: string}> = props => {

    const [ userSectionWidth, setUserSectionWidth ] = useState<number>(0);
    const [ user ] = useAuthState(auth);
    const [ dropdown, setDropdown ] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <header className={`${styles.pageHeader} ${styles[props.type]}`}>
            <div className={styles.standardFlex}>
                    <img src='./vectors/dice-d20.svg' alt='Logo' />
                    <h1 className={styles.whiteH1}>DnD Web Sheet</h1> 
            </div>

            { user ? (<>
                <UserSectionHeader toggleDropdown={toggleDropdown} setUserSectionWidth={setUserSectionWidth} />
                <DropdownMenu active={dropdown} width={userSectionWidth} />
            </>) : <SignIn/> }
            
        </header>
    );
};
export default PageHeader;