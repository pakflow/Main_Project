import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4JH-HCBEgJSltrUeVSGgJ_KjFMaBO50k",
  authDomain: "mainprojectauth.firebaseapp.com",
  projectId: "mainprojectauth",
  storageBucket: "mainprojectauth.appspot.com",
  messagingSenderId: "188462615666",
  appId: "1:188462615666:web:5371c093a286592f26c6eb"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;