// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";

import "firebase/compat/auth"

import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDQRuWGN-jv4PQ0Gnmy7LbQYRCz3CXYjUs",
    authDomain: "webclone-b9eb0.firebaseapp.com",
    projectId: "webclone-b9eb0",
    storageBucket: "webclone-b9eb0.appspot.com",
    messagingSenderId: "315264452584",
    appId: "1:315264452584:web:c8a47733400b2b8783c65d",
    measurementId: "G-3RRX7SHC5S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };