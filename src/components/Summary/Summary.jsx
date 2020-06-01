import React from 'react'
import { Link } from 'react-router-dom';

export default function Summary(props) {
    
    return (
        <div className="col-xl-9">
            <h4 className="title">Summary</h4>
            <div className="summary">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col">
                                <div className="box task_complete">
                                    <Link to="/todays-task">
                                        <h5 className="first">
                                            4
                                        </h5>
                                        <p>Tasks To Be Completed</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="box">
                            <div className="row">
                                <div className="col">
                                    <h5>52</h5>
                                    <p>Days left to Next Exam</p>
                                </div>
                                <div className="col">
                                    <h5 className="last">89</h5>
                                    <p>Days left to Holiday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
