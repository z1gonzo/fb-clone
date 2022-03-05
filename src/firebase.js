import firebase, { firestore } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'THIS_IS_YOUR_API_KEY',
  authDomain: 'THIS_IS_YOUR_DOMAIN.firebaseapp.com',
  databaseURL: 'https://THIS_IS_YOUR_DOMAIN.firebaseio.com',
  projectId: 'THIS_IS_YOUR_DOMAIN',
  storageBucket: 'THIS_IS_YOUR_DOMAIN.appspot.com',
  messagingSenderId: 'THIS_IS_YOUR_DOMAIN',
  appId: 'THIS_IS_YOUR_DOMAIN',
  measurementId: 'THIS_IS_YOUR_DOMAIN',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
