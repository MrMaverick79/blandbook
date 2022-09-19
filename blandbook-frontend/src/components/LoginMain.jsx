import React from 'react';
import axios from 'axios'


import Login from './Login';


const BASE_URL = 'http://localhost:3000'

class LoginMain extends React.Component{

    state = {
        currentUser: null
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
          this.props.currentUser(res.data)
        //   console.log('LoginMain', res.data) // for test
        })
        .catch(err => console.warn(err))
      }

    // Set our state of current user to undefined.
    // Remove the jwt token from our local storage
    // Set our axios default headers to undefined.

    render(){
        return (
                <div className="login_form">
                   <Login setCurrentUser={this.setCurrentUser} />
                </div>
        );
    } // render




} // class LoginMain


export default LoginMain
