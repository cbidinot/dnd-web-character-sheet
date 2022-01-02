import { DocumentData } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CharacterSheet from "../containers/CharacterSheet";
import { checkCache } from "../lib/userCharactersFetching"; 
import { auth } from "../lib/firebase";


export default function MyCharacters() {

    const [user, loading] = useAuthState(auth);
    const router = useRouter();
    const [ characterId, setCharacterId ] = useState<string>();
    const [ allCharacters, setAllCharacters ] = useState<(string | DocumentData)[][]>();
    const [ isLoaded, setIsLoaded ] = useState(false);

    //Checks if user is authenticated, if not, redirects to login
    useEffect(() => {
        if(!(user || loading)) {
            router.push('./login');
        };
    }, [user, loading]);

    //Checks if a query parameter was specified, if yes, sets state accordingly
    useEffect(() => {
        if( typeof router.query.id == 'string' ) {
          setCharacterId(router.query.id)  
        }
    }, [router.query])

    //Fetches all character from cache if available, if not, fetches from server
    useEffect(() => {
        if(user && !loading) {
            checkCache(user.uid)
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
    
    if(loading) {
        return <h1>Loading...</h1>
    } else return (
        <>
            { !isLoaded && <h1>Loading...</h1> }
            { isLoaded && <>
                { !characterId && <h1>no query</h1> }
                { characterId && allCharacters?.some((array) => array.includes(characterId)) && 
                    <CharacterSheet characterId={characterId} /> }
                { characterId && !allCharacters?.some((array) => array.includes(characterId)) && <h1>not found</h1> }
                { !allCharacters && <h1>An error occurred, try again later</h1> }
            </> }
        </>
    );
}