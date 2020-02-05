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

  export const createUserProfileDocument = async(userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  //const collectionRef = firestore.collection('users'); 
    
    const snapShot = await userRef.get();
    //const  collectionSnapShot = await collectionRef.get();

    //console.log({collection:collectionSnapShot.docs.map(doc=>doc.data())});
    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createdAt= new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
          console.log("error creating user", error.message);
      }
    }
    return userRef; 
  }

  export const convertCollectionsSnapshotToMap=(collections)=>{
    const transformedCollection= collections.docs.map(doc=>{
      const {title,items} = doc.data();

      return {
        routeName:encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
       }
    });
  return transformedCollection.reduce((accumulator,collection)=>{
      accumulator[collection.title.toLowerCase()]=collection;
      return accumulator;
    },{});
  }
firebase.initializeApp(config);
export const auth = firebase.auth(); 
export const firestore= firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);