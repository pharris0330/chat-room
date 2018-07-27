import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAYnYVNGsK2aPi3CgLqvv0Vw_b_PtqtlCY",
  authDomain: "chat-app-57845.firebaseapp.com",
  databaseURL: "https://chat-app-57845.firebaseio.com",
  projectId: "chat-app-57845",
  storageBucket: "chat-app-57845.appspot.com",
  messagingSenderId: "689256355197"
};



firebase.initializeApp(config);

const database = firebase.database();

export {
  database,
};
