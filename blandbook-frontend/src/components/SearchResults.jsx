
import React from "react";

class SearchResults extends React.Component {

    state = {
        results: null
    }

    componentDidUpdate() {
        console.log('search results');
        if(this.props.results !== this.state.results)
        this.setState({
            results: this.props.results
        })
       
    }

    handleClick = ()=>{
        this.props.close()
    }

    render(){
            return(
                    this.state.results &&
                    <ul className={this.props.classNames}>
                      
                            {this.state.results.map(ele => 
                                <li>
                                    {console.log('inside: ', ele.title)}
                                    <p>{ele.title && ele.title}</p>
                                    <p>{ele.email && ele.email}</p>
                                </li>
                            )}

                            <button onClick={this.handleClick}>Close</button>
                    </ul>
        )
    }


}

export default SearchResults