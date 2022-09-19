import axios from "axios";
import React from "react";
import '../../src/Chat.css';
import ChatroomWebSocket from "./ChatroomWebSocket";
import ChatroomFeed from "./ChatroomFeed";


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

    //Map over the members of the chat to show them in the sidebar
    showMembers = ( membersList ) => {
        return membersList.map( member =>{
            return <li><img src={member.avatar} id="chat_avatar"/>{member.screen_name} </li>
        })
    }


    render(){

        return(

            <div className="chatroom">
                <h3 id="chatroom_title">Welcome to {this.props.roomData.chatroom.title}</h3>
                    <div className="chatroom_sidebar">  
                        
                        <h4>Other people in {this.props.roomData.chatroom.title} </h4>
                        <ul id='chatroom_members'>
                            {this.showMembers(this.props.roomData.users)}
                            
                            
                        </ul>   


                    </div>

                    <ChatroomFeed chatroom={this.props.roomData.chatroom} user={this.props.currentUser}/>

                    <form id='chat-form' onSubmit={this.submitMessage}>
                        <h3>Post a new message:</h3>
                           
                            <textarea type='text' value={this.state.newMessage} onChange={this.handleMessageInput} id="chat_input" placeholder="Type your message here..."></textarea>
                            <input type='submit' id="chat_button" value=""></input>
                            
                    </form>

            {/* This invisible component is the core of the chat app. It contains the details of the cable through the WS */}
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