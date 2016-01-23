/**
 * Name: Lior Elrom
 * Date: 1/23/16
 * Time: 12:02 AM
 */

'use strict';

import React from 'react';

class VideoItem extends React.Component {

    render() {
        const { video, onSelectedVideo } = this.props;
        const { snippet } = video;
        const { title, thumbnails } = snippet;
        const { url } = thumbnails.default;

        return (
            <li className="list-group-item video-item" onClick={onSelectedVideo.bind(null, video)}>
                <div className="video-list-media">
                    <div className="media-left">
                        <img src={url} alt={title} className="media-object" />
                    </div>
                    <div className="media-body">
                        <div className="media-title">{title}</div>
                    </div>
                </div>
            </li>
        );
    }
}

VideoItem.propTypes = {
    video: React.PropTypes.object.isRequired,
    onSelectedVideo: React.PropTypes.func.isRequired
};

export default VideoItem;