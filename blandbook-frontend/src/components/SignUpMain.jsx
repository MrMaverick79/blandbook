import React from 'react'
import axios from 'axios'
import {Route, Link, HashRouter as Router} from 'react-router-dom';

import SignUp from './SignUp';

const BASE_URL_USERS = 'http://localhost:3000/users'

class SignUpMain extends React.Component{

    state = {
        newUser: {},
        // loading: true,
        error: null
    }

    componentDidMount(){
        this.setNewUser();
    }

    // fetchNewUser = async () => {

    //     try {
    //         const res = await axios.get(BASE_URL_USERS);
    //         // console.log('fetchNewUser', res.data); //for test

    //         this.setState({
    //             // newUser: res.data,
    //             loading: false
    //         });
    //     } catch(err){
    //         console.error('Error loadind from API', err);

    //         this.setState({
    //             loading: false,
    //             error: err
    //         });
    //     }
    // }

    setNewUser = async(object) => {
        try {
            const res = await axios.post(BASE_URL_USERS, {
                email: object.email, 
                screen_name: object.screen_name, 
                password: object.password, 
                avatar: object.avatar, 
                location: object.location, 
                is_admin: object.is_admin 
            });

            console.log('setNewUser Response', res.data); // for test

            this.setState({
                newUser: res.data,
                // loading: false
            });
        } catch(err){
            this.setState({
                // loading: false,
                error: err
            });
            console.warn(err);  
        }
    } // setNewUser


    render(){

        // if(this.state.error !== null){
        //     return <p>There was an error setting the new user</p>
        // }

        return (
            <div>
                <Router>
                    <Link to='/signup'>Sign Up</Link>

                    <Route exact path='/signup' render={(props) => <SignUp notifySignUp={this.setNewUser} {...props} />}  />

                    {/* <Route exact path='/signup' render={() => <SignUp notifySignUp={this.setNewUser} />}  /> */}

               

                    {/* <SignUp notifySignUp={this.setNewUser} /> */}

                    {
                        // !this.state.loading
                        // && 
                        <p>{this.state.newUser.email}</p>
                    }
                </Router>
            </div>
        );
    } // render



} // class SignUpMain

export default SignUpMain


