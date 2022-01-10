import {useAllCharactersFetch } from "../lib/userCharactersFetching";
import { useAuthRequeriment } from "../lib/auth";
import Link from "next/link";

export default function Dashboard() {
    //TEMPORARY, DELETE ME
    const pfp = './pfp.png';


    const [ allCharacters, isLoaded ] = useAllCharactersFetch();

    const [user, loading] = useAuthRequeriment();
    
    if(loading || !user ) {
        return <h1>loading...</h1>;
    } else {
        return (
            <>  
                <img src={user?.photoURL ? user.photoURL : pfp} style={{width: "100px", height: "100px"}}/>
                <h1>Hello {user?.displayName}</h1>
                <Link href='/characters/new'><a>maek</a></Link>
            </>
        );
    }
};