//this is a child component for the ChatroomFeed component.
//It displays the essages as either from the user or from another user.

import React from "react";

class ChatroomMessage extends React.Component{

    whichUser = (id ) => {
        if (id === this.props.userId){
            return "user_message"
                    
        } else {
            return "other_message"
        }
    } //end whichUser
            

    render(){

        return(

            <div id="chat_message" className={this.whichUser(this.props.senderId )}>
                    <p>{this.props.message.content}</p>

            </div>

            


        )

    }


}


export default ChatroomMessage