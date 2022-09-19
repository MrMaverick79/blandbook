import React from 'react';
import axios from 'axios'
import {Route, Link, HashRouter as Router} from 'react-router-dom';

import Login from './Login';
import MyProfile from './MyProfile';

const BASE_URL = 'http://localhost:3000'

class LoginMain extends React.Component{

    state = {
        currentUser: undefined
    }

    componentDidMount(){
        // want to check if the user is logged in when we visit
        this.setCurrentUser();
    }

    // This is a function to get the current user from your database if there is one.
    // a token which holds a json web token 'jwt' from your local storage. (set this on the login page)
    // pass through this token as an auth header which will let our server validate us
    setCurrentUser = () => {
        let token = "Bearer " + localStorage.getItem("jwt");
        axios.get(`${BASE_URL}/users/current`, {
          headers: {
            'Authorization': token
          }
        })
        .then(res => {
          this.setState({currentUser: res.data})
        //   console.log('LoginMain', res.data) // for test
        })
        .catch(err => console.warn(err))
      }

    // Set our state of current user to undefined.
    // Remove the jwt token from our local storage
    // Set our axios default headers to undefined.
    handleLogout = () => {
    this.setState({currentUser: undefined})
    localStorage.removeItem("jwt");
    axios.defaults.headers.common['Authorization'] = undefined;
    }

    render(){
        return (
            <Router>
                <header>
                    {
                        this.state.currentUser !== undefined
                        ?
                        (
                            <ul>
                            <li>Welcome {this.state.currentUser.name} | </li>
                            <li><Link to='/my_profile'>My Profile</Link></li>
                            <li><Link onClick={this.handleLogout} to='/'>Logout</Link></li>
                            </ul>
                        )
                        :
                        (
                            <ul>
                            <li><Link to='/login'>Login</Link></li>
                            </ul>
                        )
                    }
                    <hr />
                </header>
            <div>
                <Route exact path='/my_profile' component={MyProfile}/>
                <Route
                exact path='/login'
                render={(props) => <Login setCurrentUser={this.setCurrentUser}{...props}/>}
                />
            </div>
            </Router>
        );
    } // render




} // class LoginMain


export default LoginMain
