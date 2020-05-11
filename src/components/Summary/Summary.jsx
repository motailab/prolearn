import React from 'react'
import { Link } from 'react-router-dom';

export default function Summary(props) {
    
    return (
        <div className="col-lg-9">
            <h4 className="title">Summary</h4>
            <div className="box summary">
                <div className="row">
                    <div className="col">
                        <h5 className="first">
                            <Link to="/todays-task">4</Link>
                        </h5>
                        <p>Tasks To Be Completed</p>
                    </div>
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
    );
};
