import styles from '../styles/components/DropdownMenu.module.scss';
import SignOut from "../components/SignOut";

const DropdownMenu: React.FC<{active: boolean}> = (props) => {

    return (
        <div className={`${styles.dropdown} ${props.active ? styles.active : styles.unactive}`}>
            <ul>
                <li>Dashboard</li>
                <SignOut/>
            </ul>
        </div>
    );
}

export default DropdownMenu;