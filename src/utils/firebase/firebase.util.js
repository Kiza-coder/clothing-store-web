import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};


export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};



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

 export const signOutUser = async () => signOut(auth);

 export const onAuthStateChangedListener =  (callback) => onAuthStateChanged(auth,callback);

