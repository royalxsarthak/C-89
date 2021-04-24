import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCa6lTdRSyPWiOT4uSDwKqxmBJG80WbpK0",
  authDomain: "barter-bde5b.firebaseapp.com",
  projectId: "barter-bde5b",
  storageBucket: "barter-bde5b.appspot.com",
  messagingSenderId: "755254216695",
  appId: "1:755254216695:web:7bb4b176d443670d2690f2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
