/**
 * Name: Lior Elrom
 * Date: 1/23/16
 * Time: 12:02 AM
 */

'use strict';

import React from 'react';

class VideoItem extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        const { snippet } = this.props.video;
        const { title } = snippet;
        const { url } = snippet.thumbnails.default;

        return (
            <li className="list-group-item">
                <div className="video-list-media">
                    <div className="media-left">
                        <img src={url} alt="" className="media-object" />
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
    video: React.PropTypes.object.isRequired
};

VideoItem.defaultProps = {};

export default VideoItem;