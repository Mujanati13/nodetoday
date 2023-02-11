// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore , doc , setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0JRhgrj7U0SrvrLpaq0mxBG3IAS2pLSY",
  authDomain: "nodetoday-6e72b.firebaseapp.com",
  projectId: "nodetoday-6e72b",
  storageBucket: "nodetoday-6e72b.appspot.com",
  messagingSenderId: "568479711346",
  appId: "1:568479711346:web:a06724499299e66abdc2eb"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const db = getFirestore(App);


function AddArticle(ArticleContext , ArticleName , pathImage){
    // get images and apload 
}
