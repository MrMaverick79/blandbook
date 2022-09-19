
// Tools imports
import { Route, HashRouter as Router, Link, Redirect } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

// CSS imports
import '../App.css';
import '../css/first_row_info.css'
import '../css/shows.css'
import '../css/chat.css'
import '../css/posts.css'

// Components imports
import ChatroomShow from './ChatroomShow';
import CurrentUserInfo from './CurrentUserInfo';
import Icons from './Icons';
import SearchForm from './SearchForm';
import AllChatRooms from './AllChatRooms';
import ChatRoom from './ChatRoom';
import LoginMain from './LoginMain';
import Login from './Login';
import Posts from './Posts';
import SignUpMain from './SignUpMain';



class Homepage extends React.Component {

  state = {
    currentUser: null,
    query: null,
    error: null,
    room: null,
    allRooms: [],
    currentRoom: {
      chatroom: {},
      users: [],
      messages: []
    }
  }

  getCurrentUser = (userInfo) => {
    // get the current info.(from CurrentUserInfo component) 
    // we can use this function to share current user info
    this.setState({
      currentUser: userInfo,
      loading: false
    })
    console.log(userInfo.id);
  }

  getQuery = (query) => {
    // get the query words from search form
    this.setState({
      query: query
    })
    console.log('Query from Search Form: ', query);

  }

  getChatRoom = (room) => {
    // get the chat room id from 'all chat rooms' list
    //room here is an object
    this.setState({
      room: room
      // currentRoom:{
      //   chatroom: room
      // }
    })
    this.getRoomData(room.id)
    console.log('clicked room:', room);


  }

  componentDidMount() {
    console.log(this.state.currentUser);
 
 
 
 
 
  }


  getRoomData = (id) => {


    fetch(`http://localhost:3000/chatrooms/${id}.json`)
    .then(response => response.json())
    .then(result => {
      console.log('The response from the chatroom fetch was ', result)
      this.setState({
        currentRoom: {
          chatroom: result,
          users: result.users,
          messages: result.messages
        }
      })
    })

    // const res = await axios.get(`http://localhost:3000/chatrooms/${id}.json}`)
    // console.log(res);
    // this.setState({
    //   currentRoom: {
    //     chatroom: res.data,
    //     users: res.data.users,
    //     messages: res.data.messages
    //   } //end currentRoom
    // })



  } //end getRoomData


  updateAppStateRoom = (newroom) => { //newroom is an object we get back from the ChatroomWebSocket after a message has been posted.
    console.log('The new room recieved by udpateAppStateRoom is', newroom);
    
    this.setState({
      
      currentRoom: {
        chatroom: newroom.chatroom.data,
        users: newroom.users,
        messages: newroom.messages
      }
    
    })
  }

  render() {
    return (


      <div className="App">
        {/* This is the template layout */}

        <Router>
          <div className='container'>
            {/* flex container */}
            <nav>
              {/* all a_tags here */}

              <Link to="#">{Icons.settings}</Link>
              <Link to="#">{Icons.home}</Link>
              <Link to="#">{Icons.account}</Link>
              <Link to="#">{Icons.chat}</Link>
              <Link to="#">{Icons.groupChat}</Link>
              <Link to="#">{Icons.weather}</Link>
              <Link to="#">{Icons.calendar}</Link>

            </nav>

            <main>
              {/* all Components here */}


              <div className='first_row_info'>

                <strong>Dashboard</strong>

                <SearchForm classNames={'search_form'} query={this.getQuery} />
                {this.state.currentUser
                  &&
                  <CurrentUserInfo classNames={'user_info'} user={this.state.currentUser} />
                }
                {/* 
                  1. 'last_user' is for testing only, when app ready we can change to user.id. 
                  2. user's info got in this component and back to here by this.getCurrentUser, therefore, we can use this to share the current user info to other compoenet
                  3. classNames is a customized props used to set css
                */}
              </div>
              {/* end for first row info */}





              <div className="container">

                {this.state.currentUser === null
                  &&
                  <LoginMain currentUser={this.getCurrentUser} />
                }
                <br />

                {this.state.currentUser === null
                  &&
                  <SignUpMain />
                }


                {this.state.currentUser //ensure got the user info first
                  &&
                  <div className="chat_container">
                    <AllChatRooms classNames={'all_chat_rooms'} currentUser_id={this.state.currentUser.id} clickedRoom={this.getChatRoom} />

                    {this.state.room //ensure got the room id first
                      &&
                      // <ChatRoom classNames={'chatroom'} currentUser_id={this.state.currentUser.id} room={this.state.room} />
                      // <Route exact path ={`/chatrooms/${this.state.room}`} render={ (props) => {return this.state.currentUser ? 
                      // (
                      <ChatroomShow
                        //  
                        cableApp={this.props.cableApp}
                        updateApp={this.updateAppStateRoom}
                        getRoomData={this.getRoomData}
                        roomData={this.state.currentRoom}
                        currentUser={this.state.currentUser}
                        currentRoom={this.state.room}
                      />

                      //   ) : (
                      //     <Redirect to ='/' />
                      //   )
                      // }} />



                    }
                  </div>

                }


                <div className="post_container">
                  <Posts classNames={'posts'} currentUser={this.state.currentUser} />

                </div>




              </div>



            </main>
          </div>
          {/* flex container end */}

        </Router>

        <footer className='center'>
          {/* footer info here */}
          &copy; Blandbook @ 2022
        </footer>

      </div>
    );
  }
}

export default Homepage;
