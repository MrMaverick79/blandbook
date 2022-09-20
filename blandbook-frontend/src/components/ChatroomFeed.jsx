//This component shows the feed of the chat. It is a child of the 'ChatroomShow' comp.

//TODO: Pass the avatar url to the ChatroomMessage component

import React from "react";
import ChatroomMessage from "./ChatroomMessage";

class ChatroomFeed extends React.Component {

    state={
        loading: null,
    }

    
    showMessages( allMessages ){
        
        return allMessages.map( message =>{
            console.log(message);
            return <ChatroomMessage key={message.id} message={message.content} senderId={message.user_id} userId={this.props.user} />
        })
    }
    
   
    // }
    // showAllMessages = (messageList) =>{
    //     console.log('We are in showAllMessages', messageList);
    //     // return messageList.map( message =>{
    //     //     return {message} />
    //     const elements = []
    //     Object.entries(messageList).forEach(
    //         ([key, value]) => {
    //            console.log('Just checking', value.content);
    //            elements.push(<p>{value.content}</p>)
               
              
            
    //         })
      
    //     return elements.map( message =>{
    //             return <ChatroomMessage  message={message} />
    //     });
        
    //     // })
    // }

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