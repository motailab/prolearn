import React from 'react';
// import { Link } from 'react-router-dom';

export default function RightSidebar() {

    return (
        <div className="rightSidebar">
            <h3 className="title">Weekly</h3>
             <div className="box weeklyReport">
                 <div className="row">
                    <div className="col">
                        <i className="fas fa-graduation-cap"></i>
                        <h6>lesson taken</h6>
                        <h4 className="first">25</h4>
                    </div>
                    <div className="col">
                        <i className="fas fa-clock"></i>
                        <h6>Time Spent</h6>
                        <h4>2h 25m</h4>
                    </div>
                    <div className="col">
                        <i className="fas fa-gift"></i>
                        <h6>Rewards</h6>
                        <h4 className="last">4</h4>
                    </div>
                 </div>
             </div>
        </div>
    )
}
