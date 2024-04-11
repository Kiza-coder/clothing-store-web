import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../../utils/firebase/firebase.util";

const SignIn = () => {





    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();

        const userDocRef = await createUserDocumentFromAuth(user);
    }



    return (
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Pop UP
            </button>

        </div>
    )
}

export default SignIn;