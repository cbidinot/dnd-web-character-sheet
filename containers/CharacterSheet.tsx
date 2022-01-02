import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { initialFetch } from "../lib/characterSheet";


const CharacterSheet: React.FC<{ characterId: string }> = props => {

    const [ data, setData ] = useState<DocumentData>();
    const [ isLoaded, setIsLoaded ] = useState(false);

    // Initially fetches the character data from the most up-to-date source
    useEffect(() => {
        initialFetch(props.characterId)
            .then((doc) => {
                setData(doc);
                setIsLoaded(true);
            })
            .catch((err) => {
                console.error(err);
                window.alert(err.message);
            })
    }, [])

    return (<>
        { !isLoaded && <h1>Loading...</h1> }
        { isLoaded && data && 
            <>
                <ul>
                    { Object.entries(data).map(([key, value]) => <li>{key}</li>) }
                </ul>
            </>
        }
        { isLoaded && !data && <h1>An error occurred, try again later</h1> }
    </>);
};

export default CharacterSheet;