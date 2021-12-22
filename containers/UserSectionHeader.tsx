import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import SignOut from "../components/SignOut";
import SignIn from "../components/SignIn";

export default function UserSectionHeader() {
    const [user] = useAuthState(auth);

    return (
        <div>
            {user ? (
                <>
                    <SignOut/>
                </>
            ) : <SignIn/>}
            
        </div>
    );
};