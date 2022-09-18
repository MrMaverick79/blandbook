
// Tools imports
import { Route, HashRouter as Router, Link, Redirect } from 'react-router-dom';
import React from 'react';

// CSS imports
import '../App.css';
import '../css/first_row_info.css'

// Components imports
import ChatroomShow from './ChatroomShow';
import CurrentUserInfo from './CurrentUserInfo';
import Icons from './Icons';
import SearchForm from './SearchForm';


class Homepage extends React.Component {

  getCurrentUser = (userInfo) => {
    // get the current info.(from CurrentUserInfo component) 
    // we can use this function to share current user info
    console.log(userInfo);
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

                <p>Dashboard</p> 

                <SearchForm classNames={'search_form'} />

                <CurrentUserInfo classNames={'user_info'} user_id={'last_user'} currentUser={this.getCurrentUser} />
                {/* 
                  1. 'last_user' is for testing only, when app ready we can change to user.id. 
                  2. user's info got in this component and back to here by this.getCurrentUser, therefore, we can use this to share the current user info to other compoenet
                  3. classNames is a customized props used to set css
                */}


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
