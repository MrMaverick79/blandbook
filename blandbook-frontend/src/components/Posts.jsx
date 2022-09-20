import React from "react";
import axios from "axios";

import Comments from "./Comments";



// TODO: Posts Sort?
class Posts extends React.Component {

    state = {
        postsArr: null,
    }

    getPosts = async () => {
        const res = await axios.get(`http://localhost:3000/posts.json`)

        this.setState({
            postsArr: res.data.reverse(),
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
            } else if(i === index && fc === 'dislike'){
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



    componentDidMount() {
        this.getPosts()
    }


    render() {
        return (
            this.state.postsArr &&
            <div className={this.props.classNames}>
                {this.state.postsArr.map((post, index) =>
                    <li key={post.id}>
                        <p>{post.title}</p>
                        <p>like:{post.like} <button onClick={() => this.handleClick(post.id, post.like, index, 'like')}>👍</button> | dislike:{post.dislike} <button onClick={() => this.handleClick(post.id, post.dislike, index, 'dislike')}>👎</button></p>
                        <p>create time:{post.created_at}</p>
                        <p>created by:{post.user.screen_name}</p>

                        < Comments singlePost={post} />

                        <br />
                    </li>)}

            </div>
        )
    }


}

export default Posts

