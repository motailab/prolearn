
import React from 'react';
import CustomScroll from 'react-custom-scroll';
import RightSidebar from '../RightSidebar';
import CircleProgressBar from '../CircleProgressBar/CircleProgressBar';
import user from '../../assets/images/user.jpg';



export default function Profile() {
    return (
        <div className="profile-area">
            <div className="profile-header">
                <div className="container">
                    <div className="row">
                        <div className="col">
                           <div className="media">
                                <div className="profile_image">
                                    <img src={user} alt=""/>
                                </div>
                               <div className="media-body">
                                 <h1>Elina de cost</h1>
                                 <p>Lorem ipsum dolar site amit khan your late that you done last day</p>
                               </div>
                           </div>
                           
                        </div>
                        <div className="col-auto">
                            asdf asdfasdf
                            <div class="progress_area">
                                <CircleProgressBar 
                                    trailStrokeColor="#C4C4C4"
                                    strokeColor="#37A0F6"
                                    percentage={75}
                                    innerText="complete"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-content">
               
            </div>
        </div>          
    );
};
