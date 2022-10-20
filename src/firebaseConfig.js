import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCl-_TGgJOmukGUR_pwyyd1fa6ErKWL9v0",
    authDomain: "eduardojcv-76735.firebaseapp.com",
    databaseURL: "https://eduardojcv-76735.firebaseio.com",
    projectId: "eduardojcv-76735",
    storageBucket: "eduardojcv-76735.appspot.com",
    messagingSenderId: "422534670347",
    appId: "1:422534670347:web:96a216f029fdf41d3e7f0e"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db
const db = firebaseApp.firestore();

export { db };