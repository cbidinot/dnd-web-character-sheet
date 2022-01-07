import { auth, db } from "./firebase";
import { collection, query, where, DocumentData, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";


const fetchCharacters = async (uid: string) => {

    const charactersCollection = collection(db, 'characters');
    const q = query(charactersCollection, where('uid', '==', uid));
    const Qsnapshot = await getDocs(q);

    return Qsnapshot.docs.map(doc => {
        return [doc.id, doc.data()];
    });
};

export const useAllCharactersFetch = (): [(string | DocumentData)[][], boolean ] => {

    const [user] = useAuthState(auth);
    const [ allCharacters, setAllCharacters ] = useState<(string | DocumentData)[][]>([]);
    const [ isLoaded, setIsLoaded ] = useState(false);
   
    useEffect(() => {
        if(user) {
            fetchCharacters(user.uid)
                .then((data) => {
                    setAllCharacters(data);
                    setIsLoaded(true);
                })
                .catch((error) => {
                    console.error(error);
                    window.alert(error);
                })
        };
    }, [user]);
    
    return [ allCharacters, isLoaded ];
};