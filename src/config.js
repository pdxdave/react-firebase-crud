import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD1y4A_yZxpIzqRQsb0yafTroKaOlbNwII",
    authDomain: "react-emp-list-4cb53.firebaseapp.com",
    databaseURL: "https://react-emp-list-4cb53.firebaseio.com",
    projectId: "react-emp-list-4cb53",
    storageBucket: "react-emp-list-4cb53.appspot.com",
    messagingSenderId: "116465535343",
    appId: "1:116465535343:web:659f79c85848ccd620c09a"
};
  // Initialize Firebase
let fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref()