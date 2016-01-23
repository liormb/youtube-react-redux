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
import SearchBar   from './components/SearchBar';
import VideoItems  from './components/VideoItems';
import VideoDetail from './components/VideoDetail';

class App extends Component {

    constructor(props) {
        super(props);
        this.onSelectedVideo = this.onSelectedVideo.bind(this);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.getVideos();
    }

    onSelectedVideo(selectedVideo) {
        this.setState({ selectedVideo });
    }

    getVideos() {
        YTSearch({
            key: API_KEY,
            term: 'surfboard'
        }, (videos) => this.setState({
            videos,
            selectedVideo: videos[0]
        }));
    }

    render() {
        const { videos, selectedVideo } = this.state;
        return (
            <div className="page-wrapper">
                <SearchBar />
                <VideoDetail video={selectedVideo} />
                <VideoItems videos={videos} onSelectedVideo={this.onSelectedVideo} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('page'));
