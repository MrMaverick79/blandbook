import React from "react";
import axios from "axios";

class CreatePost extends React.Component{

    state={
        post:null
    }


    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({post:e.target.value})
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        const res = await axios.post(`http://localhost:3000/posts`,{
            post:{
                user_id: this.props.currentUser.id,
                title:this.state.post,
                like:0,
                dislike:0
            }
        })
        this.props.updateData()
        e.target[0].value = ''
    }



    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea name="postArea" cols="20" rows="5" onChange={this.handleChange} placeholder="New Post"></textarea>
                <br />
                <input type="submit" value="Post" />
            </form>
        )
    }


}


export default CreatePost