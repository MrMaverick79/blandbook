
import React from "react";
import { Route, HashRouter as Router, Link, Redirect } from 'react-router-dom';

class SearchResults extends React.Component {

    state = {
        results: null
    }

    componentDidUpdate() {
        console.log('search results');
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
            <ul className={this.props.classNames}>

                {this.state.results.map(ele =>
                    <li>
                        {console.log('inside: ', ele.title)}
                        <Link to={`/comments/${ele.id}`} onClick={this.handleClick}>{ele.title && ele.title}</Link>
                        <p>{ele.email && ele.email}</p>
                        <hr />
                    </li>
                )}

                <button onClick={this.handleClick}>Close</button>
            </ul>
        )
    }


}

export default SearchResults