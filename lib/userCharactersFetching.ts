import { db } from "./firebase";
import { collection, query, where, getDocsFromCache, getDocsFromServer } from 'firebase/firestore';

/**
 * Queries the database for all character sheet documents belonging to the logged-in user.
 * 
 * @param uid Unique user id string.
 * @returns A promise that resolves to an array of arrays containing the document id and the sheet object.
 */
export const fetchCharactersFromServer = async (uid: string) => {

    const charactersCollection = collection(db, 'characters');
    const q = query(charactersCollection, where('uid', '==', uid));
    const Qsnapshot = await getDocsFromServer(q);

    return Qsnapshot.docs.map(doc => {
        return [doc.id, doc.data()];
    });
};

/**
 * Attemps to fetch all character sheets belonging to a user from cache, if not available, fetches all characters from the server.
 * 
 * @param uid Unique user id string.
 * @returns Promise that resolves to an array containting arrays with the document id and the character sheet object.
 */
export const checkCache = async (uid: string) => {

    const charactersCollection = collection(db, 'characters');
    const q = query(charactersCollection, where('uid', '==', uid));

    try {
        const qSnapshot = await getDocsFromCache(q);
        return qSnapshot.docs.map(doc => {
            return [doc.id, doc.data()];
        });
    } catch (err) {
        return await fetchCharactersFromServer(uid);
    }
    

};