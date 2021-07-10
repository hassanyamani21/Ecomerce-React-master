// database/firebaseDb.js

import  firebase from 'firebase';
import "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyCY9nfO5n3msgCwYtZhO-4g-qB2uVeIb4E",
    authDomain: "causal-prism-297507.firebaseapp.com",
    projectId: "causal-prism-297507",
    storageBucket: "causal-prism-297507.appspot.com",
    messagingSenderId: "374660763802",
    appId: "1:374660763802:web:786433f1721eb4bae60f23"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();