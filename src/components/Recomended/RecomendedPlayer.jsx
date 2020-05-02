import React from 'react';
import ReactPlayer from 'react-player';

export default function RecomendedPlayer(props) {

    return (
        <div className="col-md-6">
            <div className="card p-3 player-container">
                <div className="d-flex justify-content-between">
                    <div className='player-wrapper' style={{flexBasis: '70%'}}>
                        <ReactPlayer 
                        url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" 
                        width="100%" height="100%" 
                        controls
                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        onContextMenu={e => e.preventDefault()}/>
                    </div>
                    <div className="info ml-2">
                        <h4>How & Why We Read</h4>
                        <p><strong>- CrashCourse</strong></p>
                        <div className="match d-flex justify-content-between align-items-center">
                            <h3>36.4%</h3>
                            <p>match</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
