import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
       super(props);

       this.state = {
           rooms: [

           ],
           newRoomName:''
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
    this.setState({ newRoomName: e.target.value })
  }

   handleSubmit(e) {
        e.preventDefault();
        if (!this.state.newRoomName) { return }
        this.createRoom(this.state.newRoomName);
     this.setState({ newRoomName: "" });
      }

   createRoom(name){
     const rooms = this.state.newRoomName
         this.roomsRef.push({name: name});
   }


  render() {
    return (
      <div className="RoomList">
      {this.state.rooms.map((room, index) =>
          <div key={index}>{room.name}</div>
        )}
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newRoomName } onChange={ (e) => this.createRoom(index) } />
            <input type="submit" />
          </form>
        <button>Submit</button>
        </div>
        </div>
      );



  }
}

export default RoomList;
