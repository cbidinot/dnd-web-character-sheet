import { db } from "./firebase";
import { addDoc, collection, DocumentData, DocumentReference } from 'firebase/firestore';

export const initCharacter = async (userId: string, data: DocumentData) => {
    const path = collection(db, 'characters');
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {reject('Request timeout, pleace check your network connection')}, 20000)
    });
    const test = addDoc(path, {...data, uid: userId});

    try {
       const newDocRef: any = await Promise.race([timeout, test]) 
       return newDocRef.id;
    } catch(error: any) {
        if(error == 'Request timeout, pleace check your network connection') {
            console.error(error);
            window.alert(error);
        } else {
            console.error({error});
            window.alert(error.message);
        }
    };
    
        
 
};