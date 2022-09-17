import React from "react";

class ChatroomWebSocket extends React.Component {

    componentDidMount(){

        //This is needed to render data on the ChatroomShow component
        this.props.getRoomDtat(window.location.href.match(/\d+$/)[0]
        )

        //the subscriptions.create() here is sending params to the subscribed action in the ChatroomsChannel
        this.props.cableApp.room =
        this.props.cableApp.cable.subscriptions.create({
            channel: 'ChatroomChannel',
            room: window.location.href.match(/\d+$/)[0]
        },
        
        {

            received: (updatedRoom) => {
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