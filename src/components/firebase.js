import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCsqr68WDH4Z5zKQkvKXzb0UctL486sexc",
  authDomain: "react-coderhouse-fb150.firebaseapp.com",
  projectId: "react-coderhouse-fb150",
  storageBucket: "react-coderhouse-fb150.appspot.com",
  messagingSenderId: "1033224264144",
  appId: "1:1033224264144:web:ee2d7d32f7639130c9c1d5",
  measurementId: "G-3DLL5K7SK5",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
