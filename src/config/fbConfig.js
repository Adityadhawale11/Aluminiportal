import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var firebaseConfig = {
  apiKey: "AIzaSyC-3vVZeDOLbt7YW1yS44qChsTGsqwOQLc",
  authDomain: "alumini-36c31.firebaseapp.com",
  projectId: "alumini-36c31",
  storageBucket: "alumini-36c31.appspot.com",
  messagingSenderId: "937573988151",
  appId: "1:937573988151:web:860d310118101c6a108cb2",
  measurementId: "G-DGN1WCQQK6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 