import React from "react";
import axios from "axios";

// import Comments from "./Comments";
import { Route, HashRouter as Router, Link, Redirect } from 'react-router-dom';
import Comments from "./Comments";
import CreatePost from "./CreatePost";



// TODO: Posts Sort?
class Posts extends React.Component {

    state = {
        postsArr: null,
        clicked: false,
    }

    getPosts = async () => {
        const res = await axios.get(`http://localhost:3000/posts.json`)

        this.setState({
            postsArr: res.data.reverse(),
        })
    }


    handleClick = async (post_id, numb, index, fc, e) => {

        // let clickedTemp = this.state.clicked
        
        this.setState({
            clicked: !this.state.clicked
        })

        let newNumber = numb

        if (this.state.clicked) {
            newNumber -= 1
            e.target.className = 'material-symbols-outlined unfilled'
        } else { 
            newNumber += 1
            e.target.className = 'material-symbols-outlined filled'
         }

        let adjust = null
        if (fc === 'like') {

            adjust = {
                post: {
                    like: newNumber
                }
            }
        } else {
            adjust = {
                post: {
                    dislike: newNumber
                }
            }
        }

        const res = await axios.patch(`http://localhost:3000/posts/${post_id}`, adjust)
        this.getPosts()

    }



    updateRenderData = (post_id) => {

        let newArr = []

        this.state.postsArr.forEach(post => {
            if (post.id !== post_id) {
                newArr.push(post)
            }
        })

        this.setState({
            postsArr: newArr
        })
    }

    handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/posts/${id}`)
        this.updateRenderData(id)
    }


    componentDidMount() {
        this.getPosts()
    }


    render() {
        return (
            this.state.postsArr &&
            <ul className={this.props.classNames}>
                <CreatePost currentUser={this.props.currentUser} updateData={this.getPosts} />
                <hr />
                {this.state.postsArr.map((post, index) =>
                    <li key={post.id}>
                        <p>{post.title}</p>
                        <p>like:{post.like} <button class="material-symbols-outlined" onClick={(e) => this.handleClick(post.id, post.like, index, 'like', e)}>thumb_up</button> | dislike:{post.dislike} <button class="material-symbols-outlined" onClick={(e) => this.handleClick(post.id, post.dislike, index, 'dislike', e)}>thumb_down</button></p>
                        <p>create time:{post.created_at}</p>
                        <p>created by:{post.user.screen_name}</p>

                        {this.props.currentUser
                            &&
                            <Link to={`/comments/${post.id}`}>Comments</Link>
                        }

                        {' | '}
                        {
                            this.props.currentUser.id === post.user_id &&
                            <button onClick={() => this.handleDelete(post.id)}>Delete</button>
                        }
                        <br />

                        <hr />
                        <br />
                    </li>)}

            </ul>

        )
    }


}

export default Posts

