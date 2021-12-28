import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PageHeader from "../containers/PageHeader";
import UserSectionHeader from "../components/UserSectionHeader";
import styles from '../styles/util.module.scss';
import { fetchCharacters } from "../lib/dashboard";

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
                <PageHeader type='home'/>
                <img src={user?.photoURL ? user.photoURL : pfp} style={{width: "100px", height: "100px"}}/>
                <h1>Hello {user?.displayName}</h1>
                <button onClick={() => { if(user)fetchCharacters(user.uid)}}>TEST FETCH</button>
            </>
        );
    }
};