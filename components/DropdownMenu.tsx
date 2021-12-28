import styles from '../styles/components/DropdownMenu.module.scss';
import SignOut from "../components/SignOut"; 
import { useState } from 'react';
import Link from 'next/link';

const DropdownMenu: React.FC<{active: boolean, width: number, activeFocus: boolean}> = (props) => {

    let dropdownRef: HTMLDivElement | null = null;

    const [ hoverState, setHoverState ] = useState(false);
    const [ focusState, setFocusState ] = useState(false);

    return (
        <div className={`${styles.dropdown} ${props.active || hoverState || focusState || props.activeFocus ? styles.active : styles.unactive}`} style={{width: props.width}} 
        ref={node => {dropdownRef = node}} onMouseEnter={()=>{setHoverState(true)}} onMouseLeave={()=>{setHoverState(false)}} 
        onFocus={() => {setFocusState(true)}} onBlur={() => {setFocusState(false)}} > 
            <ul>
                <Link href='/dashboard' >
                    <li className={styles.dashboardLink} tabIndex={0}>
                        <a>Dashboard</a> 
                    </li>
                </Link>
                <SignOut/>
            </ul>
        </div>
    );
}

export default DropdownMenu;