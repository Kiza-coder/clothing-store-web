import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../../utils/firebase/firebase.util";

import SignUpForm from '../../sign-up-form/sign-up-form.component';

const SignIn = () => {

    const logGoogleUser = async () => {
        var { user } = await signInWithGooglePopup();
        var userDocRef = await createUserDocumentFromAuth(user, user.displayName);
    }


    return (
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google Pop UP
            </button>
            <SignUpForm/>

        </div>
    )
}

export default SignIn;