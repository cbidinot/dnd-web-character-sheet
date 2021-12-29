import { KeyboardEventHandler } from "react";


export const handleTabToClick: KeyboardEventHandler = (event) => {
    const code = event.code;
    const clickEvent = new MouseEvent('onClick');
    if(code == 'Enter') {event.target.dispatchEvent(clickEvent)};
};