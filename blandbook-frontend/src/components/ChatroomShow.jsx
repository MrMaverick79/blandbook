import axios from "axios";
import React from "react";
import ChatroomWebSocket from "./ChatroomWebSocket";



class ChatroomShow extends React.Component {

    state = {
        newMessage : ''
    }

    

    //This takes the content of the input field and adds it to the state as a new message
    handleMessageInput = ( e ) => {
        this.setState({
            newMessage: e.target.value
        })
    }

    //After submission, clear the state so a new message can be added. Also prevent the submit button from refreshing the page
    submitMessage = async ( e ) => {
        e.preventDefault()
        
        this.setState({
            newMessage: ''
        })
   
        //Define the message to match the model created in Rails. Might need to add some more details here to enable the other features in message (such as likes or dislikes).

        const message = {

            content: this.state.newMessage,
            user_id: this.props.currentUser.id,
            chatroom_id: this.props.roomData.chatroom.id

        }

        //post a message to the server using another axios rquest
        const res = await axios.post("http://localhost:3000/messages",message
        )
        console.log(res.data)

        
       
   
   
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