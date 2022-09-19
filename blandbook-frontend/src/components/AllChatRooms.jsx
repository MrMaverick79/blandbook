import React from "react";
import axios from "axios";

class AllChatRooms extends React.Component {

    state = {
        loading:true,
        error:null,
        rooms:null
    }

    

    getAllRooms = async (user_id) => {
        const res = await axios.get(`http://localhost:3000/users/${user_id}/all_chat_rooms`)

        this.setState({
            rooms: res.data,
            loading:false
        })

        console.log(res.data);
    }

    handleClick = (room) =>{
        
        this.props.clickedRoom(room)
    }
  
    componentDidMount(){
        this.getAllRooms(this.props.currentUser_id)
    }

    render() {
        return (
            !this.state.loading 
            &&
            <div className={this.props.classNames}>
                <h6>All Chat Rooms:</h6>
                <ul>
                    {this.state.rooms.map(ele=>
                        <li key={ele.id} onClick={()=>this.handleClick(ele)}>
                            <img src={ele.image} alt={ele.title}/>
                            <br />
                            <p>{ele.title}</p>
                        </li>
                        )}

                </ul>
            </div>
        )
    }

}

export default AllChatRooms