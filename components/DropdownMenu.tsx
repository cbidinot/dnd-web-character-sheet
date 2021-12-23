import styles from '../styles/containers/UserSectionHeader.module.scss';

export default function DropdownMenu() {

    return (
        <div className={styles.dropdown}>
            <ul>
                <li>Dashboard</li>
                <li>Sign Out</li>
            </ul>
        </div>
    );
}