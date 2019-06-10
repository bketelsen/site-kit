import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';
import { authState } from 'rxfire/auth';
import { collectionData } from 'rxfire/firestore';
import { map } from 'rxjs/operators';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBrJTSVG_8xpnEsi_3V6itGSZjcjo7GoC0",
    authDomain: "snacks-717e0.firebaseapp.com",
    databaseURL: "https://snacks-717e0.firebaseio.com",
    projectId: "snacks-717e0",
    storageBucket: "snacks-717e0.appspot.com",
    messagingSenderId: "216915368226",
    appId: "1:216915368226:web:267c32f0555380b6"
});

const firestore = firebase.firestore(app);
const auth = firebase.auth(app);
const loggedIn$ = authState(auth).pipe(map(user => (user ? user : null)));

export { app, auth, firestore, collectionData, loggedIn$ };

export default firebase;