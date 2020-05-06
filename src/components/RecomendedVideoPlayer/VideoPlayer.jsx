import React from 'react'
import ReactPlayer from 'react-player';
import thumb from '../../assets/images/video-default-thumb.jpg';

export default function VideoPlayer({ url, thumbnail }) {
    url = url ? url : 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4';

    return (
        <div className="video-player">
            <ReactPlayer
                url={url}
                controls
                width="100%"
                height="100%"
                className="react-video-player"
                light={thumbnail ? thumbnail : thumb}
                playing
            />
        </div>
    )
};
