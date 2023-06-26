import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCrx0-9WF96GBlmtwWvwlSs0JwlcM4cJT8",
    authDomain: "botogram-d7715.firebaseapp.com",
    projectId: "botogram-d7715",
    storageBucket: "botogram-d7715.appspot.com",
    messagingSenderId: "165703800852",
    appId: "1:165703800852:web:cc1282f313e8acf01eaf01"
}).auth();