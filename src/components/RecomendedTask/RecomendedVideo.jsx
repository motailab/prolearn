import React from 'react';
import { Link } from 'react-router-dom';
import thumb from '../../assets/images/video-default-thumb.jpg';


export default function RecomendedVideo({title, match, courseType, ...props}) {
    
    return (
        <div className="box player-container">
            <Link to={{
                pathname: '/learning-path/video-lession',
                state: {
                    currentPlay: {
                        title,
                        courseType,
                        match,
                        ...props
                    }
                }
            }}>
                <div className="row">
                    <div className='col-7'>
                        <img src={props.thumbnail ? props.thumbnail : thumb} alt="img-thumbnail" className="img-fluid"/>
                    </div>
                    <div className="col pl-0">
                    <h4 className="title">{title}</h4>
                        <p>- {courseType}</p>
                        <div className="match">
                            <h3>{match}% <span>match</span></h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
