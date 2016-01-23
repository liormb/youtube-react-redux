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
        this.setState({ term: value });
    }

    render() {
        const { term } = this.state;

        return (
            <div className="search-bar-wrapper">
                <input
                    type="text"
                    defaultValue={term}
                    onChange={this.onInputChange}
                />
            </div>
        );
    }
}

export default SearchBar;