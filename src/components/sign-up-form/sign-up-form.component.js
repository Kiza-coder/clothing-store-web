import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if(password !== confirmPassword){
        alert('Password do not match');
        return;
    }

    try{
        const {user}= await createAuthUserWithEmailAndPassword(email,password);
        await createUserDocumentFromAuth(user, displayName);
        console.log('User Created', displayName);
        resetFormFields();
    }

    catch(error){
        console.log("Somenthing is going wrong with authentification",error)
    }

    
  
  }



  const handleChange = (event) => {
    var { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign in with your password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Display name</label>
        <input
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />

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

        <label>Confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
