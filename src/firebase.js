import firebase from "firebase";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBkcJxB4lq0Fv7NlhpcDl0rxSQFrpN61Y4",
    authDomain: "weather-app-e796d.firebaseapp.com",
    databaseURL: "https://weather-app-e796d.firebaseio.com",
    projectId: "weather-app-e796d",
    storageBucket: "weather-app-e796d.appspot.com",
    messagingSenderId: "239107309337",
    appId: "1:239107309337:web:8a7c299441e9291f008f88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const providers = {
    google: new firebase.auth.GoogleAuthProvider(),
    // facebook: new firebase.auth.GoogleAuthProvider()
}


export const firestore = firebase.firestore();

export default firebase;

 
