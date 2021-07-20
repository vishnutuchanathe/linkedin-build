import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCitu--iL8l9Ek3IpcA_Svlzubvgmb6Y3E",
  authDomain: "linkedin-clone-3497f.firebaseapp.com",
  projectId: "linkedin-clone-3497f",
  storageBucket: "linkedin-clone-3497f.appspot.com",
  messagingSenderId: "308202200970",
  appId: "1:308202200970:web:795bc819cd00729a307273",
  measurementId: "G-NZ71MHV64T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};