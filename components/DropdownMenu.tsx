import styles from '../styles/components/DropdownMenu.module.scss';
import SignOut from "../components/SignOut"; 
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Link from 'next/link';
import { handleTabToClick } from '../lib/util';

const DropdownMenu: React.FC<{uSActive: boolean, width: number, activeFocus: boolean, dropdownActive: boolean, setDropdownActive: Dispatch<SetStateAction<boolean>>}> = (props) => {

    let dropdownRef: HTMLDivElement | null = null;

    const [ hoverState, setHoverState ] = useState(false);
    const [ focusState, setFocusState ] = useState(false);

    useEffect(() => {
        props.setDropdownActive(hoverState || focusState || props.uSActive || props.activeFocus);
    }, [hoverState, focusState, props.uSActive, props.activeFocus ])

    return (
        <div className={`${styles.dropdown} ${ props.dropdownActive ? styles.active : styles.unactive}`} style={{width: props.width}} 
        ref={node => {dropdownRef = node}} onMouseEnter={()=>{setHoverState(true)}} onMouseLeave={()=>{setHoverState(false)}} 
        onFocus={() => {setFocusState(true)}} onBlur={() => {setFocusState(false)}} > 
            <ul>
                <Link href='/dashboard' >
                    <a className={styles.dashboardLink} >
                        <li>
                            Dashboard
                        </li>
                    </a>
                </Link>
                <SignOut/>
            </ul>
        </div>
    );
}

export default DropdownMenu;