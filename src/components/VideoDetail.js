/**
 * Name: Lior Elrom
 * Date: 1/23/16
 * Time: 12:02 AM
 */

'use strict';

import React from 'react';

const baseUrl = 'https://www.youtube.com/embed/';

class VideoDetail extends React.Component {

    renderLoading() {
        return (
            <div className="embed-responsive embed-responsive-16by9 loader">
                <img src="/assets/images/loader.gif" alt="loading..." />
            </div>
        );
    }

    renderVideo() {
        const { id, snippet } = this.props.video;
        const { title, description } = snippet;
        const url = baseUrl + id.videoId;
        return (
            <div className="video-detail">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
                </div>
                <div className="details">
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
            </div>
        );
    }

    render() {
        const { video } = this.props;
        return (
            <div className="video-detail-wrapper col-md-8">
                {video ? this.renderVideo() : this.renderLoading()}
            </div>
        );
    }
}

VideoDetail.propTypes = {
    video: React.PropTypes.any
};

export default VideoDetail;