import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import VideoPlayer from '../RecomendedVideoPlayer/VideoPlayer'
import TaskDetailsRightSidebar from '../TaskDetailsRightSidebar';
import CustomScroll from 'react-custom-scroll';
import { fetchData } from '../../utils/client';

export default function VideoTask(props) {
    const history = useHistory();
    const {location: { state: { currentPlay }}} = history;
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        fetchData('/video/get/'+currentPlay.data.id)
        .then(video => {
           setVideoData(video.data);
        })
        .catch(error => {
            console.log(error);
        });

    }, [currentPlay]);

    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md-8 overViweWrap">
                    <Link className="overview" to="/todays-task"><i className="fas fa-caret-left"></i> Back </Link>
                    <h4 className="title">
                        Video Task
                    </h4>
                    <CustomScroll heightRelativeToParent="100vh">
                       {videoData ? (
                            <div className="video-task">
                                <VideoPlayer url={videoData.url} thumbnail={currentPlay.data.thumbnail} />
                                <hr/>
                                <h3>{videoData.text}</h3>
                                <p style={{fontSize:"12px"}}>{videoData.explanation}</p>
                            </div>
                       ) : (
                           <div className="skeleton-box video-task" style={{height: '50%'}}></div>
                       )}
                    </CustomScroll>
                </div>
                <div className="col-md-4">
                    <TaskDetailsRightSidebar />
                </div>
            </div>
        </div>
    );
};
