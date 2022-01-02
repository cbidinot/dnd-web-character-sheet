import { db } from "./firebase";
import { addDoc, collection } from 'firebase/firestore';

export const initCharacter = (uid: string) => {
    const path = collection(db, 'characters');
    addDoc(path, {uid: uid});
};