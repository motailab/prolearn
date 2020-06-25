import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import thumb from '../../assets/images/video-default-thumb.jpg';


export default function RecomendedVideo({title, match, courseType, ...props}) {
    
    return (
        <div className="box player-container">

                <div className="row align-items-center">
                    <div className='col-7'>
                    <Link to={{
                            pathname: '/todays-task/video-lession',
                            state: {
                                currentPlay: {
                                    title,
                                
                                    ...props
                                }
                            }
                        }}>
                        <img src={props.thumbnail ? props.thumbnail : thumb} alt="img-thumbnail" className="img-fluid"/>
                     </Link>
                    </div>
                    <div className="col pl-0">
                      <h4 className="title">
                      <Link to={{
                            pathname: '/todays-task/video-lession',
                            state: {
                                currentPlay: {
                                    title,
                                
                                    ...props
                                }
                            }
                        }}>
                          {title}
                        </Link>
                          </h4>
                        <p>- {courseType}</p>
                        <div className="match">
                            <h3 className="mt-2 mb-0">{match}% <span>match</span></h3>
                        </div>
                    </div>
                </div>
           
        </div>
    );
};
