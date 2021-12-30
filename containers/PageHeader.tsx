import UserSectionHeader from '../components/UserSectionHeader';
import styles from '../styles/containers/pageHeader.module.scss';
import DropdownMenu from '../components/DropdownMenu';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import SignIn from '../components/SignIn';
import Link from 'next/link';


const PageHeader: React.FC<{}> = props => {

    const [ userSectionWidth, setUserSectionWidth ] = useState<number>(0);
    const [ user ] = useAuthState(auth);
    const [ uSdropdown, setDropdown ] = useState(false);
    const [ dropdownFocus, setDropdownFocus ] = useState(false);
    const [ dropdownActive, setDropdownActive ] = useState(false);

    const toggleUSDropdown = () => {
        setDropdown(!uSdropdown);
    };

    const toggleDropdownFocus = () => {
        setDropdownFocus(!dropdownFocus);
    };

    return (
        <header className={styles.pageHeader}>
            <Link href='/'>
               <a className={styles.logo} >
                    <img src='./vectors/dice-d20.svg' alt='Logo' />
                    <h1 className={styles.whiteH1}>DnD Web Sheet</h1> 
                </a> 
            </Link>
            

            { user ? (<>
                <UserSectionHeader toggleDropdown={toggleUSDropdown} setUserSectionWidth={setUserSectionWidth} toggleDropdownFocus={toggleDropdownFocus} dropdownActive={dropdownActive} />
                <DropdownMenu uSActive={uSdropdown} width={userSectionWidth} activeFocus={dropdownFocus} setDropdownActive={setDropdownActive} dropdownActive={dropdownActive} />
            </>) : <SignIn/> }
            
        </header>
    );
};
export default PageHeader;