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
        userDetails: null
    }
    

    componentDidMount() {
        this.getPosts()
    }
    

    

    getPosts = async () => {
        const res = await axios.get(`http://localhost:3000/posts.json`)
        const response = await axios.get(`http://localhost:3000/friends/${this.props.currentUser.id}.json`)

        this.setState({
            postsArr: res.data.reverse(),
            userDetails: response.data
        })
    }


    handleClick = async (post_id, numb, index, fc) => {

        let adjust = null
        if (fc === 'like') {
            adjust = {
                post: {
                    like: numb + 1
                }
            }
        } else {
            adjust = {
                post: {
                    dislike: numb + 1
                }
            }
        }

        const res = await axios.patch(`http://localhost:3000/posts/${post_id}`, adjust)

        const newArr = this.state.postsArr.map((post, i) => {
            if (i === index && fc === 'like') {
                let newPost = { ...post }
                newPost.like = post.like + 1
                return newPost
            } else if (i === index && fc === 'dislike') {
                let newPost = { ...post }
                newPost.dislike = post.dislike + 1
                return newPost
            }
            else {
                return post
            }
        })

        this.setState({
            postsArr: newArr
        })

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

    

    checkFollow = (posterId) => {
        
        return <span>Follow</span>
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
                        <p>like:{post.like} <button onClick={() => this.handleClick(post.id, post.like, index, 'like')}>👍</button> | dislike:{post.dislike} <button onClick={() => this.handleClick(post.id, post.dislike, index, 'dislike')}>👎</button></p>
                        <p>create time:{post.created_at}</p>
                        <p>created by:{post.user.screen_name}<span className={this.checkFollow(post.user.id)}></span></p> 
                        
                           

                         

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

