import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

const config = {
  apiKey: "AIzaSyAYnYVNGsK2aPi3CgLqvv0Vw_b_PtqtlCY",
  authDomain: "chat-app-57845.firebaseapp.com",
  databaseURL: "https://chat-app-57845.firebaseio.com",
  projectId: "chat-app-57845",
  storageBucket: "chat-app-57845.appspot.com",
  messagingSenderId: "689256355197"
};
firebase.initializeApp(config);


class App extends Component {
      render() {
    return (
      <div className="app">
        <h1 className="chat-header">Bloc Chat</h1>
<main>
          <RoomList
           firebase= { firebase }/>
           </main>
      </div>





    );
  }
}

export default App;
