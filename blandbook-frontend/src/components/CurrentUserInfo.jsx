import React from "react";
import axios from "axios";
import '../css/user_info.css'

class CurrentUserInfo extends React.Component {

    state = {
        // all data
        currentUser: null,
        loading: true,
        error: null
    }

    getCurrentUser = async (user_id) => {
        const res = await axios.get(`http://localhost:3000/users/${user_id}`)

        this.setState({
            currentUser: res.data,
            loading: false,
            // error:
        })

        this.props.currentUser(res.data)
        // pass the user info to parent 
    }

    componentDidMount() {
        this.getCurrentUser(this.props.user_id)
    }

    render() {
        return (
            !this.state.loading
            &&
            <div className={this.props.classNames}>
                <img src={this.state.currentUser.avatar} alt={this.state.currentUser.screen_name} className='avatar' />
                {' '}
                Hi {this.state.currentUser.screen_name}
            </div>
        )
    }

}

export default CurrentUserInfo