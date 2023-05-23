import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBiUuhD0mHKKCqVFqRELcQmcYQOSU6THpo",
  authDomain: "disney-3730f.firebaseapp.com",
  projectId: "disney-3730f",
  storageBucket: "disney-3730f.appspot.com",
  messagingSenderId: "483569390939",
  appId: "1:483569390939:web:42e5370b1ad81fa007b67e",
  measurementId: "G-EHWDZYGDNM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
