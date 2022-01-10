import { FirebaseError } from "firebase/app";
import { doc, DocumentData, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";

export const useActiveSheet = (): [ DocumentData | undefined, boolean, string | undefined, (key: string, change: any) => void, () => boolean ] => {

    const router = useRouter();
    const [ user, loading ] = useAuthState(auth);
    const [ data, setData ] = useState<DocumentData>();
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ characterId, setCharacterId ] = useState<string>();
    const [ exception, setException ] = useState<string>();
    const [ timer, setTimer ] = useState(false);
    const [ prevData, setPrevData ] = useState<DocumentData>();

    //Checks if a query parameter was specified, if yes, sets state accordingly
    useEffect(() => {
        if(typeof router.query.id == 'string') {
            setCharacterId(router.query.id);

        } else if(user) setException('missing query');
    }, [router.query, user]);

    const updateData = (key: string, change: any) => {
        setData({...data, [key]: change})
    };

    useEffect(() => {
        if(user && characterId && !loading ) {
            const ref = doc(db, 'characters', characterId);

            getDoc(ref)
                .then((snap) => {setData(snap.data()); setPrevData(snap.data()); setIsLoaded(true);})
                .catch((error: FirebaseError) => {
                    if(error.code == 'permission-denied') {
                        setException(error.code)
                        window.alert("Permission denied: character does not exist or you don't have the right permissions to access it");
                    } else {
                        console.error(error);
                        window.alert(error.message);
                    }
                });
        }
    }, [user, characterId]);

    useEffect(() => {
        
        const clock = new Promise((resolve, reject) => {
            setTimeout(() => {
                if((user && characterId) && prevData != data) {
                    const ref = doc(db, 'characters', characterId);
                    setPrevData(data);
                    updateDoc(ref, data);
                }
                setTimer(!timer);
            }, 5000)
        })
    }, [timer]);

    const manualUpdate = () => {
        if((user && characterId) && prevData != data) {
            const ref = doc(db, 'characters', characterId);
            setPrevData(data);
            updateDoc(ref, data);
            return true;
        } else return false;
    };

    return [ data, isLoaded, exception, updateData, manualUpdate ];

};
