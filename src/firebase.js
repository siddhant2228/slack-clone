 import firebase from 'firebase/compat/app';
 import 'firebase/compat/auth';
 import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDs7h-MZV1BUuAKEvLe8mkBbi-CqzipMTA",
  authDomain: "slack-clone-2abc2.firebaseapp.com",
  projectId: "slack-clone-2abc2",
  storageBucket: "slack-clone-2abc2.appspot.com",
  messagingSenderId: "940861644649",
  appId: "1:940861644649:web:e12f8c1cd555bc5da9e7f8",
  measurementId: "G-0WGZPZS8XY"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;