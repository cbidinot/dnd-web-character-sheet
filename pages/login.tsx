import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "../components/SignIn";
import { auth } from "../lib/firebase";


export default function Login() {

    const [user] = useAuthState(auth);
    const router = useRouter();
    //Redirects user back to the page they were previously in after a successful login
    useEffect(() => {
        if(user) {
            router.back();
            console.log(user);
        }
    }, [user]);

    return (
        <>
            <h1>Please Log In</h1>
            <SignIn/>
        </>
    );
};