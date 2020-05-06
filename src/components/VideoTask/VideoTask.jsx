import React from 'react';
import { useHistory } from 'react-router-dom';
import RightSidebar from '../RightSidebar'
import VideoPlayer from '../RecomendedVideoPlayer/VideoPlayer'

export default function VideoTask(props) {
    const history = useHistory();
    const {location: { state: { currentPlay }}} = history;

    console.log(currentPlay);
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md-8">
                    <div className="video-task">
                        <VideoPlayer url={currentPlay.data.url} thumbnail={currentPlay.data.thumbnail} />

                        <h3>Video HeadLine</h3>
                        <p>Some description will be place that describe...</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
};
