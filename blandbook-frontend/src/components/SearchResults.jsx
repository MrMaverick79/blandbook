
import React from "react";
import { Route, HashRouter as Router, Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


class SearchResults extends React.Component {

    state = {
        results: null
    }

    componentDidUpdate() {
        console.log('search results',this.props.results);
        if (this.props.results !== this.state.results) {
            this.setState({
                results: this.props.results
            })
        }
    }

    handleClick = () => {
        this.props.close()
        this.setState({
            results: null
        })
    }

    clicked = () => {
        console.log('clickedddd');
    }

    render() {
        return (
            this.state.results &&
            <ListGroup className={this.props.classNames}>

                {this.state.results.length > 1 ? this.state.results.map(ele =>
                    <li key={ele.id}>
                        <ListGroup.Item action href={`/comments/${ele.id}`} onClick={this.handleClick}>
                            {ele.title && ele.title}
                        </ListGroup.Item>

                        {ele.email &&
                           
                                 <ListGroup.Item>
                                 {ele.avatar && <img src={ele.avatar} className="avatar" />}
                                {ele.screen_name}
                                 </ListGroup.Item>
                
                        }


                        <hr />
                    </li>

                )
                    :
                    <p style={{ color: 'red', fontSize: '20px' }}>Can't find anything, please try again</p>
                }

                <button onClick={this.handleClick}>Close</button>
            </ListGroup>
        )
    }


}

export default SearchResults