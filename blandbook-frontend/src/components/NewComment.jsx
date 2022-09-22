
import React from "react";
import axios from "axios";
import { Route, HashRouter as Router, Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from "draftjs-to-html";
import { convertToHTML, convertFromHTML } from 'draft-convert';

const BASE_URL_CREATE_COMMENT = 'http://localhost:3000/comments'

class NewComment extends React.Component {

    state = {
        newcontent: null,
        like: 0,
        dislike: 0,
        // user_id: this.props.currentUser.id,
        post_id: this.props.currentPostId,
        show: false,
        editorState: EditorState.createEmpty(),
    };
    
    handleInput = (ev) => {
        console.log(ev.blocks);
        // console.log(ev.blocks[0].text);
        // this.setState({newcontent: ev.target.value})
        this.setState({
            editorState: ev,
            newcontent: draftToHtml( this.state.editorState ) //?????
            // newcontent: ev.blocks.map((item,index) => item.text)
        })
        // console.log(draftToHtml( ev ));
    }

    handleSubmit = async (ev) => {
        // console.log('ev', ev); // test
        ev.preventDefault();
        // console.log('NewComment handleSubmit', this.state.newcontent); // for test

        try {
            const res = await axios.post(BASE_URL_CREATE_COMMENT, {
                content: this.state.newcontent,
                like: this.state.like,
                dislike: this.state.dislike,
                // user_id: this.props.currentUser.id,
                post_id: this.props.currentPostId
            });
            // console.log('NewComment handleSubmit', res.data); // for test 

            this.props.createNewComment()
            // console.log('newcomment handlesubmit', ev.target[0].value); //test
            ev.target[0].value = ''
            this.setState({
                newcontent: null
            })
            this.handleClose()

        }catch(err){
            console.error('Error', err);
        }
    }

    handleShow = () => {
        this.setState({show: true})
    }

    handleClose = () => {
        this.setState({show: false})
    }

    // render(){
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <textarea cols="40" rows="2" onChange={this.handleInput} placeholder="Leave Your Comment"></textarea>
    //             <br />
    //             <button>Submit</button>
    //         </form>
    //     );
    // } // render()

    render(){
        return (
            <div>
                <Button size="sm" variant="primary" onClick={this.handleShow}>
                    Create your Comment
                </Button>

                <Link to="/" >
                    <Button variant="outline-secondary" size="sm" className="float-end" >
                        Go Back to Post
                    </Button> 
                </Link>

                <Modal show={this.state.show} onHide={this.handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Comment</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <Editor onChange={this.handleInput} autoFocus/>

                            <Button variant="success" type="submit" size="sm">
                                Submit
                            </Button>

                        </form>
                    </Modal.Body>
                </Modal>


            
            </div>
        );
    } // render()



} // class NewComment

export default NewComment


