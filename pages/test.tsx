import { doc, FirestoreErrorCode, getDoc } from "firebase/firestore"
import { db } from "../lib/firebase"
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { useEffect, useState } from "react";
import { initCharacter } from "../lib/buildingSheets";
import { handleTabToClick } from "../lib/util";
import { FirebaseError } from "firebase/app";

export default function Test() {
    const router = useRouter();
    const [user, loading]: any[] = useAuthState(auth);
    //Checks if user is authenticated, if not, redirects to login
    useEffect(() => {
        if(!(user || loading)) {
            router.push('./login');
        };
    }, [user, loading]);
    
    //Test function
    const getDummySheet = async () => {
        try {
            const dummySheet = doc(db, '/characters/lolllo');
            const snapshot = await getDoc(dummySheet);
            if(snapshot.exists()) {
                const rangery = snapshot.data();
                console.log(rangery);
            }   
        } catch(err: any) {
            console.log({err})
        }
        
 
    }



    const [character, setCharacter] = useState<any>({});

    if(loading) {
        return <h1>loading...</h1>;
    } else {
        return (
            <>
                <h1>Test</h1>
                <button onClick={getDummySheet}>getDummySheet</button>
                <button onClick={() => {initCharacter(user.uid); setCharacter({race: 'elf'});}}>Create Jonas</button>
                <input type='text' value={character.alignment} onChange={(e) => {setCharacter({...character, alignment: e.target.value}); console.log(character)}}></input>

                <h1 tabIndex={0} onKeyPress={handleTabToClick} onClick={() => {console.log('test')}} >test</h1>
            </>
        );
    }
}