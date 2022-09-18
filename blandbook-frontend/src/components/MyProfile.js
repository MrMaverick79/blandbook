
import React from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

class MyProfile extends React.Component{
    state = {
        currentUser: {
            email: '',
            screen_name: '',
            avatar: '',
            location: ''
        }
    }

    componentDidMount(){
        let token = "Bearer " + localStorage.getItem("jwt");
        axios.get(`${BASE_URL}/users/current`, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            this.setState({currentUser: res.data})
            console.log('myprofile currentuser', res.data); // for test
        })
        .catch(err => console.warn(err))
    }

    render(){
        return(
            <div>
                <h1>Hello {this.state.currentUser.name}</h1>
                <h4>Your email is {this.state.currentUser.email}</h4>
            </div>
        );
    } //render
} // class MyProfile


export default MyProfile
