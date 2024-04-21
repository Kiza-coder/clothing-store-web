import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    var { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user, user.displayName);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email,password);
      console.log("Connect as .. ", email )
      
      resetFormFields();

    } catch (error) {
      switch(error.code){

        case "auth/user-not-found":
          alert("User not found");
          break;
        case "auth/invalid-credential":
          alert("Incorrect password");
          break;

        

        default:
          console.log(error);
      }
      
    }
  };

  const handleChange = (event) => {
    var { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign in with your email / password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />

        <div>
          <button type="submit">Sign In with email</button>
          <button type="button" buttonType="google"  onClick={signInWithGoogle}>
            Google sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
