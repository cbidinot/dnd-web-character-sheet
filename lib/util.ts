import { DocumentData } from "firebase/firestore";
import React, { KeyboardEventHandler } from "react";


export const handleTabToClick: KeyboardEventHandler = (event) => {
    const code = event.code;
    const clickEvent = new MouseEvent('onClick');
    if(code == 'Enter') {event.target.dispatchEvent(clickEvent)};
};

export interface EditorBlockProps {
    data: DocumentData,
    updateData: (key: string, change: any, objectPath?: string) => void
}