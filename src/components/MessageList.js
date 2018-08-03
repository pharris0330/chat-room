import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
       super(props);

       this.state = {
           rooms: [

           ],
           newMessage:''
         }
         this.roomsRef = this.props.firebase.database().ref('rooms');
     }

     componentDidMount(){
     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
     });
   }

   handleChange(e) {
    this.setState({ newMessage: e.target.value })
  }

   handleSubmit(e) {
        e.preventDefault();
        if (!this.state.newMessage) { return }
        this.createRoom(this.state.newMessage);
     this.setState({ newMessage: "" });
      }

   createMessage([content, sentAt, userID, username]){
     //const sentAt = firebase.database.ServerValue.TIMESTAMP
         this.roomsRef.push(
           {content: content,
             sentAt: sentAt,
             userID: userID,
             username: username
         });
   }


  render() {
    return (
      <div className="MessageList">
      {this.state.rooms.map((room, index) =>
          <div key={index}>{room.content, room.sentAt, room.userID, room.username}</div>
        )}
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newMessage } onChange={ (e) => this.handleChange(e) } />
            <input type="submit" />
          </form>
        </div>
      );



  }
}

export default MessageList;
