
import React from "react";


class SearchForm extends React.Component {

    state = {
        query:null
    }

    handleSubmit = () =>{
        this.props.query(this.state.query)
    }

    handleInput = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    render() {
        return (

            <form className={this.props.classNames} onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Search Here" onChange={this.handleInput}/>
                <input type='submit' className="material-symbols-outlined" value='search' />
            </form>
        )
    }

}

export default SearchForm

