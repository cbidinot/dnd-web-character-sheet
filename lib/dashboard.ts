import { db } from "./firebase";
import { collection, query, where, getDocs } from 'firebase/firestore';

/**
 * Queries the database for all character sheet documents belonging to the logged-in user.
 * 
 * @param uid Unique user id string.
 * @returns An array of arrays containing the document id and the sheet object.
 */
export const fetchCharacters = async (uid: string) => {

    const charactersCollection = collection(db, 'characters');
    const q = query(charactersCollection, where('uid', '==', uid));
    const Qsnapshot = await getDocs(q);

    return Qsnapshot.docs.map(doc => {
        return [doc.id, doc.data()];
    });
};
