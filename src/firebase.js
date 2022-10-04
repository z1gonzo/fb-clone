import firebase, { firestore } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAi4zZcuz0zrU4X3-2uSgnAvFMx9fYHck",
  authDomain: "fb-clone-5e184.firebaseapp.com",
  projectId: "fb-clone-5e184",
  storageBucket: "fb-clone-5e184.appspot.com",
  messagingSenderId: "1050728540379",
  appId: "1:1050728540379:web:0e75502e58318b132184fe",
  measurementId: "G-MSLTQ0E8ZL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
