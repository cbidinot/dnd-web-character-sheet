import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { checkCache } from "../lib/userCharactersFetching";

export default function Dashboard() {
    //TEMPORARY, DELETE ME
    const pfp = './pfp.png';

    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    //Checks if user is authenticated, if not, redirects to login
    useEffect(() => {
        if(!(user || loading)) {
            router.push('./login');
        };
    }, [user, loading]);

    if(loading) {
        return <h1>loading...</h1>;
    } else {
        return (
            <>
                <img src={user?.photoURL ? user.photoURL : pfp} style={{width: "100px", height: "100px"}}/>
                <h1>Hello {user?.displayName}</h1>
                <button onClick={ async () => { if(user) await checkCache(user.uid) }}>TEST FETCH</button>
            </>
        );
    }
};