// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyCfy3HuYiib4geYawwfeD1FJ0N1iWsPTZw",
    authDomain: "film-factory-689e0.firebaseapp.com",
    databaseURL: "https://film-factory-689e0-default-rtdb.firebaseio.com",
    projectId: "film-factory-689e0",
    storageBucket: "film-factory-689e0.appspot.com",
    messagingSenderId: "909187478102",
    appId: "1:909187478102:web:41319598e16536ada401f7"
};
firebase.initializeApp(firebaseConfig);
export default firebase;