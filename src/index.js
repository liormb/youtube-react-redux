/**
 * User: liormb
 * Date: 1/22/16
 * Time: 11:35 PM
 */

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { API_KEY } from './modules/API';

// components
import SearchBar  from './components/SearchBar';
import VideoItems from './components/VideoItems';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { videos: [] };
        this.getVideos();
    }

    getVideos() {
        YTSearch({
            key: API_KEY,
            term: 'surfboard'
        }, (videos) => this.setState({ videos }));
    }

    render() {
        const { videos } = this.state;
        return (
            <div className="page-wrapper">
                <SearchBar />
                <VideoItems videos={videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('page'));
