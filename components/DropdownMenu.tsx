import styles from '../styles/components/DropdownMenu.module.scss';
import SignOut from "../components/SignOut";
import useAsyncEffect from "use-async-effect"; 

const DropdownMenu: React.FC<{active: boolean, width: number}> = (props) => {

    let dropdownRef: HTMLDivElement | null = null;
    let isActive = false;
    let realActive = false;

    const handleLeave = async () => {
        if(!props.active) {
            await new Promise((r) => {setTimeout(r, 300)});
            if(isActive) {
                realActive = true;
            } else {
                realActive = false;
            }
        } else {realActive = true};
    };

    
    useAsyncEffect(async () => {
        await handleLeave();
    }, [props.active, isActive]);

    return (
        <div className={`${styles.dropdown} ${props.active ? styles.active : styles.unactive}`} style={{width: props.width}} 
        ref={node => {dropdownRef = node}} onMouseEnter={()=>{ isActive = true;}} onMouseLeave={()=>{ isActive = false;}} > 
            <ul>
                <li>Dashboard</li>  
                <SignOut/>
            </ul>
        </div>
    );
}

export default DropdownMenu;