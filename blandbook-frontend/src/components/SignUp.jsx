import React from 'react'

class SignUp extends React.Component{

    state = {
        email: '',
        screen_name: '',
        password: '',
        avatar: '',
        location: '',
        is_admin: false // when a user sign up, make it always not admin??
    }

    //handle typing in the form
    handleInput = (ev) => {
        switch(ev.target.name){
            case 'email':
                this.setState({email: ev.target.value})
                break;
            case 'screen_name':
                this.setState({screen_name: ev.target.value})
                break;
            case 'password':
                this.setState({password: ev.target.value})
                break;
            case 'avatar':
                this.setState({avatar: ev.target.value})
                break;
            case 'location':
                this.setState({location: ev.target.value})
        }
    }

    handleSubmit = (ev) =>{
        ev.preventDefault();
        console.log('SignUp', this.state); // for test
        this.props.notifySignUp(this.state);
        this.props.history.push('/')
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                onChange={this.handleInput}
                name="email"
                type="text" 
                placeholder='Enter Email'
                />
                <br />

                <input 
                onChange={this.handleInput}
                name="screen_name"
                type="text" 
                placeholder='Enter User Name'
                />
                <br />

                <input 
                onChange={this.handleInput}
                name="password"
                type="password" 
                placeholder='Enter Password'
                />
                <br />

                <input 
                onChange={this.handleInput}
                name="avatar"
                type="text" 
                placeholder='Enter Profile Url' // change upload profile
                />
                <br />

                <input 
                onChange={this.handleInput}
                name="location"
                type="text" 
                placeholder='Enter Your Location'
                />
                <br />

                <button>Submit</button>
            </form>
        );
    } // render




} // class SignUp

export default SignUp


