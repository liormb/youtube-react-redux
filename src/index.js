/**
 * User: liormb
 * Date: 1/22/16
 * Time: 11:35 PM
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import { API_KEY } from './modules/API';

const App = () => {
    return (
        <div className="page-wrapper">
            <SearchBar />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('page'));
