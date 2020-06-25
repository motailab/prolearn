import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomScroll from 'react-custom-scroll';
import { fetchData } from '../utils/client';
// import { Link } from 'react-router-dom';

export default function OverviewRightSidebar() {
    const [rewardsOffer, setRewardsOffer] = useState([]);
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        axios.all([
            fetchData('/reward/on_offer'),
            fetchData('/overview/summary')
        ])
        .then(axios.spread((reward, summary) => {
            setRewardsOffer(reward.data);
            setSummary(summary.data);
        }))
        .catch(error => {
            console.log(error);
        })

    }, []);

    return (
        <CustomScroll heightRelativeToParent="100vh">
        <div className="rightSidebar">
            <h3 className="title">Tasks Summary </h3>
            <div className="box weeklyReport">
                <div className="row">
                    <div className="col-xl-4">
                        <i className="fas fa-graduation-cap"></i>
                        <h6>Lessons Todo</h6>
                        <h4 className="first">{summary ? summary.lessons_todo : <div className="skeleton-box" style={{width: '30px', height: '30px'}}></div>}</h4>
                    </div>
                    <div className="col-xl-4">
                        <i className="fas fa-clock"></i>
                        {/* <h6>Time Spent</h6> */}
                        <h6>Total Estimated Time Required</h6>
                        <h4>{summary ? summary.time_required +' min' : <div className="skeleton-box" style={{width: '40px', height: '40px'}}></div>}</h4>
                    </div>
                    <div className="col-xl-4">
                        <i className="fas fa-gift"></i>
                        <h6>Rewards on Offer</h6>
                        {/* <h6>Rewards Earned</h6> */}
                        <h4 className="last">{rewardsOffer.length ? rewardsOffer.length : <div className="skeleton-box" style={{width: '30px', height: '30px'}}></div>}</h4>
                    </div>
                </div>
            </div>

            <div className="reward-wrap">
                <h3 className="title">Rewards </h3>
                {rewardsOffer.length ? rewardsOffer.map((reward, id)=> (
                    <div className={`box reward  ${reward.used === false ? 'active' : ''}`} key={id}>
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
                                    <h4><div className="skeleton-box" style={{width: '30%', height: '6px'}}></div></h4>
                                </div>
                            </div>
                        </div>
                        <div className="box reward active">
                            <div className="media">
                                <div className="skeleton-box" style={{width: '20px', height: '20px'}}></div>
                                <div className="media-body">
                                    <h4><div className="skeleton-box" style={{width: '30%', height: '6px'}}></div></h4>
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
