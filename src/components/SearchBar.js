/**
 * Name: Lior Elrom
 * Date: 1/23/16
 * Time: 12:01 AM
 */

'use strict';

import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = { term: '' };
    }

    onInputChange(event) {
        const { value } = event.target;
        const { onVideoSearch } = this.props;
        this.setState({ term: value });
        onVideoSearch(value);
    }

    render() {
        const { term } = this.state;
        return (
            <div className="search-bar-wrapper">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                    defaultValue={term}
                    onChange={this.onInputChange}
                />
            </div>
        );
    }
}

SearchBar.propTypes = {
    onVideoSearch: React.PropTypes.func.isRequired
};

export default SearchBar;