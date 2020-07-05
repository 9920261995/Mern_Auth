import firebase from 'firebase'


export const firebaseConfig = {

  // apiKey: process.env.API_KEY,
  apiKey:"",
  authDomain: "reactsociallogin-9a4a4.firebaseapp.com",
  databaseURL: "https://reactsociallogin-9a4a4.firebaseio.com",
  projectId: "reactsociallogin-9a4a4",
  storageBucket: "reactsociallogin-9a4a4.appspot.com",
  messagingSenderId: "1077081618547",
  appId: "1:1077081618547:web:3ddb43a19505c6b39b5206",
  measurementId: "G-WMCND2VB6X",
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();


