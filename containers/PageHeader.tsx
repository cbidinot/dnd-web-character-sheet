import UserSectionHeader from './UserSectionHeader';
import styles from '../styles/containers/pageHeader.module.scss';
import DropdownMenu from '../components/DropdownMenu';
import { useState } from 'react';

const PageHeader: React.FC<{type: string}> = props => {

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
                
            <UserSectionHeader toggleDropdown={toggleDropdown} />
            <DropdownMenu active={dropdown} />
        </header>
    );
};
export default PageHeader;