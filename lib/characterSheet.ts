import { doc, DocumentData, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
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

export const updateDatabase = async (id: string, updatedDoc: {}) => {

    const ref = doc(db, 'characters', id);
    console.log({updatedDoc});

    try { 
        updateDoc(ref, updatedDoc);
    } catch (e) {
        console.log(e)
    };
};

export const useUpdate = (id: string) => {

    const [pendingChanges, setPendingChanges] = useState({});
    const [timer, setTimer] = useState(false);

    useEffect(() => {
        const unsub = setTimeout(() => {
            updateDatabase(id, pendingChanges);
            setPendingChanges({});
            console.count('timer');
            setTimer(!timer);
        }, 3000);
    }, [timer])

    return (change: any) => {setPendingChanges({...pendingChanges, change})};
};