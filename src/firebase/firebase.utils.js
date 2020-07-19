import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCwpGB4Q7l-blrh44wwgB69Na180hp3L_4",
    authDomain: "ecommerce-react-b2d53.firebaseapp.com",
    databaseURL: "https://ecommerce-react-b2d53.firebaseio.com",
    projectId: "ecommerce-react-b2d53",
    storageBucket: "ecommerce-react-b2d53.appspot.com",
    messagingSenderId: "127642710743",
    appId: "1:127642710743:web:fdd5531271a72c8db9f692",
    measurementId: "G-3VHH3KTCP4"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().languageCode = 'pt';
provider.setCustomParameters({ prompt: 'select_account' })
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
