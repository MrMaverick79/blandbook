
// Tools imports
import { Route, HashRouter as Router, Link, Redirect } from 'react-router-dom';
import React from 'react';

// CSS imports
import '../App.css';
import '../css/first_row_info.css'
import '../css/shows.css'

// Components imports
import ChatroomShow from './ChatroomShow';
import CurrentUserInfo from './CurrentUserInfo';
import Icons from './Icons';
import SearchForm from './SearchForm';
import AllChatRooms from './AllChatRooms';
import ChatRoom from './ChatRoom';
import LoginMain from './LoginMain';
import Login from './Login';


class Homepage extends React.Component {

  state = {
    currentUser: null,
    query: null,
    error: null,
    room: null
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
    this.setState({
      room: room
    })
    console.log('clicked room:', room);
  }

  componentDidMount() {
    console.log(this.state.currentUser);
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
              <Link to="/chatrooms/3">{Icons.chat}</Link>
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


                {this.state.currentUser //ensure got the user info first
                  &&
                  <div className="chat_container">
                    <AllChatRooms classNames={'all_chat_rooms'} currentUser_id={this.state.currentUser.id} clickedRoom={this.getChatRoom} />

                    {this.state.room //ensure got the room id first
                      &&
                      <ChatRoom classNames={'chatroom'} currentUser_id={this.state.currentUser.id} room={this.state.room} />
                    }
                  </div>
                }



                <div className="post_container">
                  Post Component Here

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
