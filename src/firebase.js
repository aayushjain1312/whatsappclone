import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBG8fyz5qs-BnTKndCYVv2RuPAapTTl6KI",
    authDomain: "whatsapp-clone-e9565.firebaseapp.com",
    projectId: "whatsapp-clone-e9565",
    storageBucket: "whatsapp-clone-e9565.appspot.com",
    messagingSenderId: "20267404897",
    appId: "1:20267404897:web:088d8a8eb8da25d7ba2420",
    measurementId: "G-2VHTY2QNKC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;