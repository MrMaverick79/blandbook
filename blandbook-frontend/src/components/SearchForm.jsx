
import React from "react";
import '../css/search_form.css';
import Icons from './Icons';

class SearchForm extends React.Component {

    render() {
        return (

            <form className={this.props.classNames}>
                <input type="text" placeholder="Search Here" />
                <input type='submit' className="material-symbols-outlined" value='search' />
            </form>

        )
    }

}

export default SearchForm

