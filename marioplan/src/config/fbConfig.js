import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyB96YJTSkIkSWh1y-wdoE5CngSyKs2WUDA",
    authDomain: "net-ninja-marioplan-f0861.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-f0861.firebaseio.com",
    projectId: "net-ninja-marioplan-f0861",
    storageBucket: "net-ninja-marioplan-f0861.appspot.com",
    messagingSenderId: "277565043469",
    appId: "1:277565043469:web:c57d373f45f2dbe4d6f644",
    measurementId: "G-P6JN27P8SF"
  };
  const firebaseApp = 
  firebase.initializeApp(firebaseConfig);

  
export const firestore = firebaseApp.firestore();
export default firebase;

