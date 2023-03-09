import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

var firebase = require("firebase");
var firebaseui = require("firebaseui");

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

//connecting firebase to cloud with firebase credentials
const firebaseConfig = {
  apiKey: process.env.API_KEY,

  authDomain: process.env.AUTH_DOMAIN,

  projectId: process.env.PROJECT_ID,

  storageBucket: process.env.STORAGE_BUCKET,

  messagingSenderId: process.env.MESSAGE_SENDER_ID,

  appId: process.env.APP_ID,

  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

//know if user is logged in or not
const auth = getAuth(app);

//listen to current user
onAuthStateChanged(auth, (user) => {
  console.log(`You are logged in as`, user);
});

//users might be null but log them in with this
signInWithPopup(auth, new GoogleAuthProvider());

//now that user log in we store something in a database
// const db = getFirestore(app);

// //reference to a document in firestore
// const boatRef = doc(db, "boats/my-awesome-boat");

// // write json data to it while referencing current user's id
// setDoc(boatRef, {
//   owner: auth.currentUser.uid,
//   name: "Starfire",
//   length: 32,
//   color: "red",
// });

// //listen to updates in real time
// onSnapshot(boatRef, (snapshot) => {
//   const boat = snapshot.data();
// });
export default app;
