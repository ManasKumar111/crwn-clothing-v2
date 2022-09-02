import {initializeApp} from 'firebase/app';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyC5MRDwPNsHIA72wSF0Smnoi5mliN1A-1Y",
    authDomain: "crwn-clothing-db-aab14.firebaseapp.com",
    projectId: "crwn-clothing-db-aab14",
    storageBucket: "crwn-clothing-db-aab14.appspot.com",
    messagingSenderId: "831148808269",
    appId: "1:831148808269:web:30aa7e68d6491624cee404"
  };
  
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);
  const provider =new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth=getAuth();  
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

  export const db =getFirestore();

  export const createUserDocumentFromAuth=async (userAuth) =>{
    const userDocRef=doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapshot=await getDoc(userDocRef);
    console.log(userSnapshot);

    if(!userSnapshot.exists()){
        const {displayName,email}=userAuth;
        const createAt=new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createAt
            })
        }catch(error){
            console.log("error creating the user ",error.message);
        }
    }
    return userDocRef


    //if user data does not exist 
    //create /set the document with the data from userAuthin my collection

    //if user data exists 
    //return userDocRef

  }