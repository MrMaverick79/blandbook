//This component shows the feed of the chat. It is a child of the 'ChatroomShow' comp.

//TODO: Pass the avatar url to the ChatroomMessage component

import React from "react";
import ChatroomMessage from "./ChatroomMessage";

class ChatroomFeed extends React.Component {

    showMessages( allMessages ){
        return allMessages.map( message =>{
            return <ChatroomMessage key={message.id} message={message} senderId={message.user_id} userId={this.props.user} />
        })
    }

    render(){

        return(

            <div className="chatroomFeed_container">
                <h3>Chatroom feed:</h3>

                <div className="messages">
                { 
                    this.props.chatroom.messages 
                    ? 
                    (this.showMessages(this.props.chatroom.messages)) 
                    :
                    (<h3>Be the first to post!</h3>) 
                }

                </div>
                    
                
                
                

               

            </div>
        )

    }


}


export default ChatroomFeed;