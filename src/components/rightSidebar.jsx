import React, { useEffect, useState } from 'react';
import CustomScroll from 'react-custom-scroll';
import { fetchData } from '../utils/client';
// import { Link } from 'react-router-dom';

export default function RightSidebar() {
    const [rewardsEarned, setEarnedRewards] = useState([]);

    useEffect(() => {

        fetchData('/reward/earned')
        .then(reward => {
            setEarnedRewards(reward.data);
        })
        .catch(error => {
            console.log(error);
        });

    }, [rewardsEarned]);
    
    return (
        <CustomScroll heightRelativeToParent="100vh">
        <div className="rightSidebar">
            <h3 className="title">This Week</h3>
            <div className="box weeklyReport">
                <div className="row">
                    <div className="col-xl-4">
                        <i className="fas fa-graduation-cap"></i>
                        <h6>Lessons Taken</h6>
                        <h4 className="first">25</h4>
                    </div>
                    <div className="col-xl-4">
                        <i className="fas fa-clock"></i>
                        <h6>Time Spent</h6>
                        {/* <h6>Total Estimated Time Required</h6> */}
                        <h4>2h 25m</h4>
                    </div>
                    <div className="col-xl-4">
                        <i className="fas fa-gift"></i>
                        {/* <h6>Rewards on Offer</h6> */}
                        <h6>Rewards Earned</h6>
                        <h4 className="last">{rewardsEarned.length ? rewardsEarned.length : <div className="skeleton-box" style={{width: '30px', height: '30px'}}></div>}</h4>
                    </div>
                </div>
            </div>

            <div className="reward-wrap">
                <h3 className="title">Rewards </h3>
                {rewardsEarned.length ? rewardsEarned.map(reward => (
                    <div className={`box reward  ${reward.used === false ? 'active' : ''}`}>
                        <div className="media">
                            <i className="fas fa-gift"></i>
                            <div className="media-body">
                                <h4>{reward.name}</h4>
                            </div>
                        </div>
                    </div>
                )):(
                    <>
                        <div className="box reward active">
                            <div className="media">
                                <div className="skeleton-box" style={{width: '20px', height: '20px'}}></div>
                                <div className="media-body">
                                    <h4><div className="skeleton-box" style={{width: '30%', height: '6px'}}></div> <span className="status"><div className="skeleton-box" style={{width: '10px', height: '6px'}}></div></span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="box reward active">
                            <div className="media">
                                <div className="skeleton-box" style={{width: '20px', height: '20px'}}></div>
                                <div className="media-body">
                                    <h4><div className="skeleton-box" style={{width: '30%', height: '6px'}}></div> <span className="status"><div className="skeleton-box" style={{width: '10px', height: '6px'}}></div></span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="box reward active">
                            <div className="media">
                                <div className="skeleton-box" style={{width: '20px', height: '20px'}}></div>
                                <div className="media-body">
                                    <h4><div className="skeleton-box" style={{width: '30%', height: '6px'}}></div> <span className="status"><div className="skeleton-box" style={{width: '10px', height: '6px'}}></div></span></h4>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
        </CustomScroll>
    )
}
