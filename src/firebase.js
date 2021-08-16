import firebase from "firebase/app"
import "firebase/firestore"


  var firebaseConfig = {

    apiKey: "AIzaSyBnOo0eeI8C9BqZslKIUQK_F-h92ExKy1o",

    authDomain: "fir-react-example-9636e.firebaseapp.com",

    projectId: "fir-react-example-9636e",

    storageBucket: "fir-react-example-9636e.appspot.com",

    messagingSenderId: "996025215660",

    appId: "1:996025215660:web:c3eef61f81a26846f98d09"

  };


  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

export default firebase