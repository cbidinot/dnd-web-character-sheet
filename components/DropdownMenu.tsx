import styles from '../styles/components/DropdownMenu.module.scss';
import SignOut from "../components/SignOut";
import useAsyncEffect from "use-async-effect"; 

const DropdownMenu: React.FC<{active: boolean, width: number}> = (props) => {

    let dropdownRef: HTMLDivElement | null = null;

    return (
        <div className={`${styles.dropdown} ${props.active ? styles.active : styles.unactive}`} style={{width: props.width}} 
        ref={node => {dropdownRef = node}} > 
            <ul>
                <li>Dashboard</li>  
                <SignOut/>
            </ul>
        </div>
    );
}

export default DropdownMenu;