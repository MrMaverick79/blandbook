
import axios from "axios";
import React from "react";


class FriendsList extends React.Component {

    
    
    componentDidMount(){
        console.log('Friends list has mounted');
        // this.getFollowerList(this.props.userId)
    }



    render() {
        return(
            <div className="allFollow_container">
                    {/* Possibly add components */}
                    <div className="followList">

                        <h2>People you follow:</h2>



                    </div>

                    <div className="followinList">
                        
                        <h2>People who folow you:</h2>



                    </div>






            </div>
            

        )
            
        
    }


}

export default FriendsList;