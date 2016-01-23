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
        const { videos, onSelectedVideo } = this.props;
        return videos.map((video) => {
            return (
                <VideoItem
                    key={video.etag}
                    video={video}
                    onSelectedVideo={onSelectedVideo}
                />
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-md-4">
                {this.renderVideos()}
            </ul>
        );
    }
}

VideoItems.propTypes = {
    videos: React.PropTypes.array.isRequired,
    onSelectedVideo: React.PropTypes.func.isRequired
};

export default VideoItems;