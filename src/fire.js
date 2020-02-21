import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCbwRjK6z6uRZuQsJ0i3ocCHQN6mdRdm7g",
    authDomain: "u10p01b.firebaseapp.com",
    databaseURL: "https://u10p01b.firebaseio.com",
    projectId: "u10p01b",
    storageBucket: "u10p01b.appspot.com",
    messagingSenderId: "363458647786",
    appId: "1:363458647786:web:fedfb5e24ad0c2e4aaa993",
    measurementId: "G-9BED6YS7XV"
  };
  // Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire