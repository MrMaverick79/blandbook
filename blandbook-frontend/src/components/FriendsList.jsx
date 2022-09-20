import axios from "axios";
import React from "react";
import Friend from "./Friend";
import '../css/friends.css'
class FriendsList extends React.Component {

    state = {
        loading: true,
        friendsList :{}
    }
    
    componentDidMount(){
        console.log('Friends list has mounted');
        // this.getFollowerList(this.props.userId)
        if (this.state.loading === true){
            this.getFriendsList()
        }

        
    }

    getFriendsList  = async()=> {

        const res = await axios.get(`http://localhost:3000/friends/${this.props.currentUser.id}.json`)

       
       this.setState({
        loading: false,
        friendsList: res.data
       })

       

    }

   
        
    




    render() {
        return(
            <div className="allFollow_container">
                    {/* Possibly add components */}
                    <div className="followList">

                        <h4>People you follow:</h4>

                     
                        <Friend details={this.state.friendsList} following={false}/>


                    </div>

                    <div className="followingList">
                        
                        <h4>People who folow you:</h4>
                        <Friend details={this.state.friendsList} following={true}/>

                    </div>






            </div>
            

        )
            
        
    }


}

export default FriendsList;