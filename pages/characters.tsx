import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CharacterSheet from "../containers/CharacterSheet";
import { useAuthRequeriment } from "../lib/auth";
import { useInitialUserFetch } from "../lib/userCharactersFetching"; 


export default function MyCharacters() {

    const [user, loading] = useAuthRequeriment();
    const router = useRouter();
    const [ characterId, setCharacterId ] = useState<string>();

    const [ allCharacters, isLoaded ] = useInitialUserFetch();
    
    //Checks if a query parameter was specified, if yes, sets state accordingly
    useEffect(() => {
        if( typeof router.query.id == 'string' ) {
          setCharacterId(router.query.id)  
        }
    }, [router.query])

    if(loading || !user ) {
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