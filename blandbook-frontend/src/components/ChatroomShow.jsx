import React from "react";
import ChatroomWebSocket from "./ChatroomWebSocket";

class ChatroomShow extends React.Component {

    state = {
        newMessage : ''
    }

    

    render(){

        return(

            <div className="chatroom">
                <h4>Welcome to chat</h4>

                <form id='chat-form' onSubmit={this.submitMessage}>
                    <h3>Post a new message:</h3>
                        <textarea type='text' value={this.state.newMessage} onChange={this.handleMessageInput}></textarea>
                    <br></br>
                    <input type='submit'></input>
                 </form>

            {/* This invisible component is the core of the chat pp */}
                 <ChatroomWebSocket
                    cableApp={this.props.cableApp}
                    updateApp={this.props.updateApp}
                    getRoomData={this.props.getRoomData}
                    roomData={this.props.roomData}
                />



            </div>


        )

    }




}

export default ChatroomShow