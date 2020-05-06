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
                        <h6>Rewards Earned</h6>
                        <h4 className="last">4</h4>
                    </div>
                 </div>
             </div>

            <div className="reward-wrap">
                <h3 className="title">Rewards <a href="#" className="gray"> <i className="fas fa-caret-left"></i> See all </a></h3>
                <div className="box reward active">
                    <div className="media">
                        <i className="fas fa-gift"></i>
                        <div className="media-body">
                            <h4>10 mins early release to recess <span className="status">NEW</span></h4>
                        </div>
                    </div>
                </div>
                {/* ennd reward */}
                <div className="box reward">
                    <div className="media">
                        <i className="fas fa-gift"></i>
                        <div className="media-body">
                            <h4>Plus 2 marks for maths assessment</h4>
                        </div>
                    </div>
                </div>
                {/* ennd reward */}
                <div className="box reward">
                    <div className="media">
                        <i className="fas fa-gift"></i>
                        <div className="media-body">
                            <h4>“Get out of Tuition” Card</h4>
                        </div>
                    </div>
                </div>
                {/* ennd reward */}
                <div className="box reward">
                    <div className="media">
                        <i className="fas fa-gift"></i>
                        <div className="media-body">
                            <h4>Plus 1 mark for english assessment </h4>
                        </div>
                    </div>
                </div>
                {/* ennd reward */}

            </div>
        </div>
    )
}
