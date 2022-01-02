import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";


export const initialFetch = async (id: string) => {

    const ref = doc(db, 'characters', id);

    try { 
        const snapshot = await getDoc(ref);
        return snapshot.data();
    } catch (e) {
        throw e;
    }

};