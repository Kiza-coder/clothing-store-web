import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAO0rBbnbbzNG6ziRRNCR2BgcmgGmsSgsA",
  authDomain: "clothing-webstore.firebaseapp.com",
  projectId: "clothing-webstore",
  storageBucket: "clothing-webstore.appspot.com",
  messagingSenderId: "1053071202115",
  appId: "1:1053071202115:web:5fbc8b86cd0f56196241f6",
};

// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();


provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth =  async (userAuth, newDisplayName) => {
    var userDocRef = doc(db, 'users', userAuth.uid); 
    var userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists())
    {
        var { email } = userAuth;
        var displayName = newDisplayName;
        var createdAt = new Date();

        try
        {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch(error)
        {
            console.log(error.message);
        }
         
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth, email,password);
}

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  
  return await signInWithEmailAndPassword(auth, email,password);
}

