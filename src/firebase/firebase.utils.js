import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDtAJUQJiTQ3jJFqf0tedK57GoMPnVq-rw",
    authDomain: "crwn-db-5a39e.firebaseapp.com",
    databaseURL: "https://crwn-db-5a39e.firebaseio.com",
    projectId: "crwn-db-5a39e",
    storageBucket: "crwn-db-5a39e.appspot.com",
    messagingSenderId: "655348203598",
    appId: "1:655348203598:web:ee5361873fc987dde2431f",
    measurementId: "G-X5Z7PJCNW2"
  };
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore= firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);