import UserSectionHeader from '../components/UserSectionHeader';
import styles from '../styles/containers/pageHeader.module.scss';
import DropdownMenu from '../components/DropdownMenu';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import SignIn from '../components/SignIn';
import Link from 'next/link';


const PageHeader: React.FC<{type: string}> = props => {

    const [ userSectionWidth, setUserSectionWidth ] = useState<number>(0);
    const [ user ] = useAuthState(auth);
    const [ dropdown, setDropdown ] = useState(false);
    const [ dropdownFocus, setDropdownFocus ] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const toggleDropdownFocus = () => {
        setDropdownFocus(!dropdownFocus);
    };

    return (
        <header className={`${styles.pageHeader} ${styles[props.type]}`}>
            <Link href='/'>
               <div className={`${styles.standardFlex} ${styles.logo}`} tabIndex={0} >
                    <img src='./vectors/dice-d20.svg' alt='Logo' />
                    <h1 className={styles.whiteH1}>DnD Web Sheet</h1> 
                </div> 
            </Link>
            

            { user ? (<>
                <UserSectionHeader toggleDropdown={toggleDropdown} setUserSectionWidth={setUserSectionWidth} toggleDropdownFocus={toggleDropdownFocus} />
                <DropdownMenu active={dropdown} width={userSectionWidth} activeFocus={dropdownFocus} />
            </>) : <SignIn/> }
            
        </header>
    );
};
export default PageHeader;