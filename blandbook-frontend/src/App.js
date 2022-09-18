
import './App.css';
import { Route, HashRouter as Router, Link, Redirect } from 'react-router-dom';
import ChatroomShow from './components/ChatroomShow';
import React from 'react';
import axios from 'axios';
import LoginMain from './components/LoginMain';


const homeIcon = <span class="material-symbols-outlined">home_app_logo</span>
const settingIcon = <span class="material-symbols-outlined">settings</span>
const accountIcon = <span class="material-symbols-outlined">account_circle</span>
const chatIcon = <span class="material-symbols-outlined">chat</span>
const groupChatIcon = <span class="material-symbols-outlined">forum</span>
const weatherIcon = <span class="material-symbols-outlined">nest_farsight_weather</span>
const calendarIcon = <span class="material-symbols-outlined">calendar_month</span>

class App extends React.Component {

    state={
      currentUser: true, //return to null after testing
      allRooms: [],
      currentRoom: {
        chatroom: {},
        users: [], 
        messages: []
      }
    }


    //I could probably use axios here and we already have the json. This is for the chatroom. The id is fetched from the url, so url must match the room_id 
    getRoomData = async( id ) => {


       const res  = await axios.get(`http://localhost:3000/chatrooms/${id}.json`)
       console.log(res);
       this.setState({
              currentRoom:{
                  chatroom: res.data,
                  users: res.data.users,
                  messages: res.data.messages

                } //end currentRoom 

              }); //end setState

        
  } //end getRoom Data


  updateAppStateRoom = (newRoom) => {
    this.setState ({
      currentRoom:{
        chatroom: newRoom.chatroom.data,
        users:newRoom.users,
        messages: newRoom.messages
      }
    })
  }


  render(){


    return (
          <div className="App">
            {/* This is the template layout */}

            <Router>
              <div className='container'>
                {/* flex container */}
                <nav>
                  {/* all a_tags here */}
                  <Link to="#">{settingIcon}</Link>
                  <Link to="#">{homeIcon}</Link>  
                  <Link to="#">{accountIcon}</Link>
                  <Link to="/chatrooms/:id">{chatIcon}</Link> 
                  <Link to="#">{groupChatIcon}</Link>
                  <Link to="#">{weatherIcon}</Link>
                  <Link to="#">{calendarIcon}</Link>
                </nav>

                <main>
                  {/* all Components here */}
                  <LoginMain />

                  <div className='test'>DIV test</div>
                    <Route exact path ="/chatrooms/:id" render={ (props) => { return this.state.currentUser ?
                    (<ChatroomShow
                        {...props}
                        cableApp ={this.props.cableApp}
                        updateApp ={this.updateAppStateRoom}
                        getRoomData ={this.getRoomData}
                        roomData = {this.state.currentRoom}
                        currentUser = {this.state.currentUser}
                      />
                      
                      ) : (
                        <Redirect to ='/' />
                      )
                      }} />
                    
                </main>

              </div>
              {/* flex container end */}


              <footer className='center'>
                {/* footer info here */}
                &copy; Blandbook @ 2022
              </footer>




            </Router>
          </div>
        );
    }
} 

export default App;
