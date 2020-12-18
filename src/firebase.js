// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC4SAyKJC2e86D2yio5ZwKb12CzBoU5iV0",
    authDomain: "clone-10fad.firebaseapp.com",
    projectId: "clone-10fad",
    storageBucket: "clone-10fad.appspot.com",
    messagingSenderId: "357782082711",
    appId: "1:357782082711:web:859e333f4ea32bc4e1c5d2",
    measurementId: "G-K751GZSMNT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export {db,auth} ;