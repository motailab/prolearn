import React from 'react';
import ReactPlayer from 'react-player';

export default function RecomendedPlayer(props) {

    return (
        <div className="col-md-6">
            <div className="box player-container">
                <div className="row">
                    <div className='col-7'>
                        <ReactPlayer 
                        url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" 
                        width="100%" height="100%" 
                        controls
                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        onContextMenu={e => e.preventDefault()}/>
                    </div>
                    <div className="col pl-0">
                        <a href="#" className="title">How & Why We Read</a>
                        <p>- CrashCourse</p>
                        <div className="match">
                            <h3>36.4% <span>match</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
