import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCHhk-494fEY4OGY7DVaFffchAvwKM-DXE",
  authDomain: "discord-clone-99534.firebaseapp.com",
  databaseURL: "https://discord-clone-99534.firebaseio.com",
  projectId: "discord-clone-99534",
  storageBucket: "discord-clone-99534.appspot.com",
  messagingSenderId: "534041655533",
  appId: "1:534041655533:web:732d5aeb8ba215180034e4",
  measurementId: "G-L17KYS9Z6Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db