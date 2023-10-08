import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOUPJ2MqgB_L_FtnrFC7icdVmuozy_uDo",
  authDomain: "clone-742a9.firebaseapp.com",
  projectId: "clone-742a9",
  storageBucket: "clone-742a9.appspot.com",
  messagingSenderId: "74265669515",
  appId: "1:74265669515:web:fbf54edf8d921e61bc098e",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
