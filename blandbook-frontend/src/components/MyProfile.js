
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
            // console.log('myprofile currentuser', res.data); // for test
        })
        .catch(err => console.warn(err))
    }

    render(){
        return(
            <div>

                <img src={this.state.currentUser.avatar} alt={this.state.currentUser.screen_name} class="myprofile_avatar" />
                Hello <strong>{this.state.currentUser.screen_name}</strong> 

                <p>Your email is <strong>{this.state.currentUser.email}</strong> </p>
            </div>
        );
    } //render
} // class MyProfile


export default MyProfile
