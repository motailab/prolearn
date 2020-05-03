import React from 'react';
import ReactPlayer from 'react-player';

export default function RecomendedPlayer({ url }) {

    return (
        <div className="col-md-6">
            <div className="box player-container">
                <div className="row">
                    <div className='col-7'>
                        <ReactPlayer 
                        url={url} 
                        width="100%" height="100%" 
                        controls
                        config={{ file: { attributes: { controlsList: 'nodownload', preload: 'none'  } } }}
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
