import CharacterSheet from "../../containers/CharacterSheet";
import { useAuthRequeriment } from "../../lib/auth";
import { useActiveSheet } from "../../lib/characterSheet";

export default function MyCharacters() {

    const [ user, loading ] = useAuthRequeriment();
    const [ data, isLoaded, exception, updateData ] = useActiveSheet();

    if((loading || !user ) || ((!isLoaded || !data) && !exception)) {
        return <h1>Loading...</h1>
    } else return (
        <>
            { exception == 'permission-denied' && <h1>permission denied</h1>}
            { exception == 'missing query' && <h1>missing query</h1>}
            { isLoaded && data && <>
                <h1>{data.name}</h1>
                <h1>{data.race}</h1>
                <input type='text' value={data.name} onChange={(e) => {updateData('name', e.target.value)}} ></input>
            </> }
        </>
    );
}