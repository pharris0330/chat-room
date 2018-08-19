import React, { Component } from 'react';

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

//active room changes every time room is pressed
//handleRoomSelect()

class App extends Component {
      render() {
    return (
      <div className="app">
        <h1 className="chat-header">Bloc Chat</h1>

       <aside>
          <RoomList
           firebase= { firebase }/>
</aside>

<main>
<div id="messagePlane">
  <h1>Message here</h1>
</div>
</main>
      </div>





    );
  }
}

export default App;
