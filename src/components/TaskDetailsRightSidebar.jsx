import React from 'react';
import CustomScroll from 'react-custom-scroll';
// import { Link } from 'react-router-dom';

export default function TaskDetailsRightSidebar() {

    return (
        <CustomScroll heightRelativeToParent="100vh">
          <div className="rightSidebar">
            {/* <h3 className="title">This Week de</h3> */}
            <div className="box weeklyReport text-center">
               <strong>This question was asked in PSLE 2016. Let’s see if you can do it!</strong>
            </div>

            <div className="box weeklyReport text-center">
               <strong>Question explanation box</strong>
            </div>

            <div className="reward-wrap details">
                <h3 className="title"> Hint1: </h3>
                <div className="box reward">
                    <div className="media">
                        <i className="fas fa-gift"></i>
                        <div className="media-body">
                            <h4>10 mins early release to recess </h4>
                        </div>
                    </div>
                </div>
                {/* ennd reward */}
                <h3 className="title"> Hint2: </h3>
                <div className="box reward">
                    <div className="media">
                        <i className="fas fa-gift"></i>
                        <div className="media-body">
                            <h4>Plus 2 marks for maths assessment</h4>
                        </div>
                    </div>
                </div>
                {/* ennd reward */}
                
            </div>

            <button className="btn mt-3 btn-lg btn-block btn-info">View Answer Button</button>

        </div>
        </CustomScroll>
    )
}
