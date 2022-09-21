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


    unfollow = async(userId, followerId) => {
        console.log('Unfollow clicked', userId, followerId);


         await axios.delete(`http://localhost:3000//followers/${userId}/${followerId}`).then(response => {
            //delete then do another axios reques
            this.getFriendsList()
         }).then(response => {
            this.showFollowers();
            this.showFollowing();
         })
         
         
       

        

        
        

    }

    showFollowers = () => {
        if(this.state.friendsList.followers){
           return  this.state.friendsList.followers.map(follower=> {
                return (
                    <li className="friendList">
                        <img src={follower.avatar} className="friendAvatar" /> 
                        <p>{follower.screen_name}</p>
                        <a onClick={()=> {this.unfollow(this.props.currentUser.id, follower.id)}} className='unfollowButton'>unfollow</a>


                    </li>
                
                )})

        

        
        
               } else {
                    return 
                }

        
    }

    showFollowing= () => {
         if(this.state.friendsList.following){
        return  this.state.friendsList.following.map(follow=> {
            return (
                <li className="friendList">
                    <img src={follow.avatar} className="friendAvatar"/> 
                    <p>{follow.screen_name}</p>



                </li>
            
            )})
        } else{
            return
        }
    }


   
        
    




    render() {
        return(
            <div className="allFollow_container">
                    {/* Possibly add components */}
                    <div className="followList">

                        <h4>People you follow:</h4>

                        {
                            this.showFollowers()
                            
                        }
                        


                    </div>

                    <div className="followingList">
                        
                        <h4>People who follow you:</h4>

                        {
                            this.showFollowing()
                            
                        }
                        
                    </div>






            </div>
            

        )
            
        
    }


}

export default FriendsList;