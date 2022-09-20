
import React from "react";
import axios from "axios";

const BASE_URL_SINGLE_POST = 'http://localhost:3000/posts/'


class Comments extends React.Component {



    state = {
        loasing: false,
        currentUser: null,
        postId: null,
        commentDetails: null,


    }

    componentDidMount() {
        // console.log('componentDidMount', this.props.match.params.postId) // for test

        this.setState({
            postId: this.props.match.params.postId,
            currentUser: this.props.currentUser
        })
        // console.log('componentDidMount state', this.state.postId) //null
        this.getCommentDetails(this.props.match.params.postId)
    }

    getCommentDetails = async(postId) => {
        try{
            const res = await axios.get(BASE_URL_SINGLE_POST + postId + '.json')
            // console.log('getCommentDetails', res.data.comments); // for test
            this.setState({
                commentDetails: res.data.comments
            })

        }catch(err){
            console.log('There was an error', err)
        }
    }





    render() {
        return (
            <div>
                <p><strong>Comments</strong></p>
                {this.state.commentDetails
                &&
                this.state.commentDetails.map((comment, index) => 
                <li key={comment.id}>
                    <p>
                        {comment.user.screen_name} says: 
                        <em>{comment.content}</em> 
                    </p>

                    <p>
                        like:{comment.like}
                        |
                        dislike:{comment.dislike}
                    </p>

                    <p>create time:{comment.created_at}</p>

                    <br />
                </li>
                )}
            </div>
        );
    }
}

export default Comments


