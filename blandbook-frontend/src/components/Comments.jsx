
import React from "react";
// import axios from "axios";

class Comments extends React.Component {
    render() {
        return (
            <div>
                <p><strong>Comments</strong></p>
                {this.props.singlePost.comments
                &&
                this.props.singlePost.comments.map((c, key) => 
                <li key={key}>
                <p >{c.content}</p> 
                
                </li>
                )}
                {/* post.comments.map((c, key) => {console.log(`Skill ${c.content} `)}   */}
            </div>
        );
    }
}

export default Comments


