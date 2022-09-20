import axios from "axios";
import React from "react";
import '../css/chat.css';
import ChatroomWebSocket from "./ChatroomWebSocket";
import ChatroomFeed from "./ChatroomFeed";


class ChatroomShow extends React.Component {

    state = {
        newMessage : '',
        roomSubscription: null

    }


    onSubscriptionCreate = ( sub ) => {
        console.log('Here is sub from oSC', sub);
        this.setState({
            roomSubscription: sub
        })
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
        console.log('The content of userId is', this.props.currentUser.id);
        
        const message = {
            
            content: this.state.newMessage,
            // user_id: this.props.currentUser.id,
            // chatroom_id: this.props.roomData.chatroom.id

        }
        
       
        // //post a message to the server using another axios rquest
        //  const res = await axios.post("http://localhost:3000/messages", message
        // )
        // console.log('This is after the message post', res.data)

        // fetch("http://localhost:3000/messages", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json"
        //     },
        //     body: JSON.stringify({message: message})
        // })
        // .then(resp => resp.json())
        // .then(result => {
        //     let messageDiv = document.getElementById('messages')
        //     messageDiv.scrollTop = messageDiv.scrollHeight
        // })
        if (this.state.roomSubscription !== null){

            this.state.roomSubscription.send(message)

        }
        

    }


    updateAppStateRoom = (message) => { //newroom is an object we get back from the ChatroomWebSocket after a message has been posted.
        console.log('The new room recieved by udpateAppStateRoom is', message);
        
        // this.setState({
          
        // //   currentRoom: {
        // //     chatroom: newroom.chatroom.data,
        // //     users: newroom.users,
        // //     messages: newroom.messages
        // //   }
        
        // })
      } //end uAS

    
   
    

    //Map over the members of the chat to show them in the sidebar
    showMembers = ( membersList ) => {
        if(membersList.length > 0){ //this was to avoid an error

            // console.log('This is members list', membersList);
            return membersList.map( member =>{
                return <li><img src={member.avatar} id="chat_avatar"/>{member.screen_name} </li>
            })


        }
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
                    updateApp={this.updateAppStateRoom}
                    getRoomData={this.props.getRoomData}
                    roomData={this.props.roomData}
                    currentRoom={this.props.currentRoom}
                    onSubscriptionCreate={this.onSubscriptionCreate}
                />



            </div>


        )

    }




}

export default ChatroomShow