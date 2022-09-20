import React from "react";
import FriendsList from "./FriendsList";
import '../css/friends.css'

class Friend extends React.Component{

    showFollow= () => {
        if(this.props.details.followers && !this.props.following ){
           return  this.props.details.followers.map(follower=> {
                return (
                    <li className="friendList">
                        <img src={follower.avatar} className="friendAvatar" /> 
                        <p>{follower.screen_name}</p>



                    </li>
                
                )})

        

        } else if(this.props.details.followers && this.props.following){
            return  this.props.details.following.map(follow=> {
                return (
                    <li className="friendList">
                        <img src={follow.avatar} className="friendAvatar"/> 
                        <p>{follow.screen_name}</p>



                    </li>
                
                )})
        

        } else {
            return <p>Loading</p>
        }

        
    }

    render(){

        return(

            <div className="friend container">
                <ul>

                    {
                        this.showFollow()
                        
                    }
                       
                </ul>
            </div>

        )

    }


}

export default Friend