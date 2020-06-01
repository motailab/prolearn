import React from 'react';
import {Link, useHistory } from 'react-router-dom';
import VideoPlayer from '../RecomendedVideoPlayer/VideoPlayer'
import TaskDetailsRightSidebar from '../TaskDetailsRightSidebar';
import CustomScroll from 'react-custom-scroll';


export default function VideoTask(props) {
    const history = useHistory();
    const {location: { state: { currentPlay }}} = history;

    console.log(currentPlay);
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md-8 overViweWrap">
                    <Link className="overview" to="/todays-task"><i className="fas fa-caret-left"></i> Back </Link>
                    <h4 className="title">
                        Video Task
                    </h4>
                    <CustomScroll heightRelativeToParent="100vh">
                        <div className="video-task">
                            <VideoPlayer url={currentPlay.data.url} thumbnail={currentPlay.data.thumbnail} />
                            <hr/>
                            <h3>Video HeadLine</h3>
                            <p style={{fontSize:"12px"}}>Some description will be place that describe...</p>
                        </div>
                    </CustomScroll>
                </div>
                <div className="col-md-4">
                    <TaskDetailsRightSidebar />
                </div>
            </div>
        </div>
    );
};
