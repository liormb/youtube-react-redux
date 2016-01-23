/**
 * Name: Lior Elrom
 * Date: 1/23/16
 * Time: 12:03 AM
 */

'use strict';

import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoItems extends Component {

    renderVideos() {
        const { videos } = this.props;
        return videos.map((video) => <VideoItem video={video} key={video.etag} />);
    }

    render() {
        return (
            <ul className="list-group col-sm-6">
                {this.renderVideos()}
            </ul>
        );
    }
}

VideoItems.propTypes = {
    videos: React.PropTypes.array.isRequired
};

VideoItems.defaultProps = {};

export default VideoItems;