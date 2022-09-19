import React from "react";

class ChatroomWebSocket extends React.Component {

    componentDidMount(){

        //This is needed to render data on the ChatroomShow component. It grabs the room id_#, 
        this.props.getRoomData(this.props.currentRoom.id)
        console.log('The ChatroomWebSocket has recieved room', this.props.currentRoom.id);
        //the subscriptions.create() here is sending params to the subscribed action in the ChatroomsChannel
        this.props.cableApp.room =
        this.props.cableApp.cable.subscriptions.create({
            channel: 'ChatroomChannel',
            room: this.props.currentRoom.id
        },
        
        {

            received: (updatedRoom) => {
                console.log('The updatedroom we received is', updatedRoom)
                this.props.updateApp(updatedRoom)
            }

        })


 
    } //end componentDidMount

    render(){
        return (
            <div></div>
        )
    }

}

export default ChatroomWebSocket