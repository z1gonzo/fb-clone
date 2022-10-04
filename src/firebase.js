import firebase, { firestore } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCiTExV0-2SKc-3161NCOem3bA62xjkAns',
  authDomain: 'fb-clone-963d8.firebaseapp.com',
  databaseURL: 'https://fb-clone-963d8.firebaseio.com',
  projectId: 'fb-clone-963d8',
  storageBucket: 'fb-clone-963d8.appspot.com',
  messagingSenderId: '98823945221',
  appId: '1:98823945221:web:98b9759c045eb193f9706c',
  measurementId: 'G-QLLL67JQPL',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
