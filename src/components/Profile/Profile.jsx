
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
                                 <p>University of Oxford, England </p>
                               </div>
                           </div>
                        </div>
                        <div className="col-auto">
                            <div class="progress_area" style={{width:"150px"}} >
                                <CircleProgressBar 
                                    trailStrokeColor="#C4C4C4"
                                    strokeColor="#37A0F6"
                                    percentage={75}
                                    innerText="complete"
                                />
                                <button type="button" className="mt-3 btn btn-info btn-block"> <i className="fas fa-pencil-alt"></i> &nbsp; Edit profile  </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-content px-4 taskListContainer">
                <div className="row">
                    <div className="col-lg-8 col-md-6 overViweWrap">
                         <div className="row">
                             <div className="col-lg-8 basic-information">
                                <h4 className="title">Basic Information </h4>
                                <div className="wrap">
                                    <div className="information">
                                        <div className="box">
                                            <div className="header border-bottom">
                                                <h3>Education</h3>
                                            </div>
                                            <div className="box">
                                                <div className="content">
                                                    <h4>Senior Web developer</h4>
                                                    <h5>webasiatech</h5>
                                                    <p>I have been working as a senior web developer in an web development company for last 2 years.</p>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="content">
                                                    <h4>Senior Web developer</h4>
                                                    <h5>webasiatech</h5>
                                                    <p>I have been working as a senior web developer in an web development company for last 2 years.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="information">
                                        <div className="box">
                                            <div className="header border-bottom">
                                                <h3>Qualifications</h3>
                                            </div>
                                            <div className="box">
                                                <div className="content">
                                                    <h4>Senior Web developer</h4>
                                                    <h5>webasiatech</h5>
                                                    <p>I have been working as a senior web developer in an web development company for last 2 years.</p>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="content">
                                                    <h4>Senior Web developer</h4>
                                                    <h5>webasiatech</h5>
                                                    <p>I have been working as a senior web developer in an web development company for last 2 years.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="information">
                                        <div className="box">
                                            <div className="header border-bottom">
                                                <h3>Experience</h3>
                                            </div>
                                            <div className="box">
                                                <div className="content">
                                                    <h4>Senior Web developer</h4>
                                                    <h5>webasiatech</h5>
                                                    <p>I have been working as a senior web developer in an web development company for last 2 years.</p>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="content">
                                                    <h4>Senior Web developer</h4>
                                                    <h5>webasiatech</h5>
                                                    <p>I have been working as a senior web developer in an web development company for last 2 years.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="information">
                                        <div className="box">
                                            <div className="header border-bottom">
                                                <h3>Achievement</h3>
                                            </div>
                                            <div className="box">
                                                <div className="content">
                                                    <h4>Senior Web developer</h4>
                                                    <h5>webasiatech</h5>
                                                    <p>I have been working as a senior web developer in an web development company for last 2 years.</p>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="content">
                                                    <h4>Senior Web developer</h4>
                                                    <h5>webasiatech</h5>
                                                    <p>I have been working as a senior web developer in an web development company for last 2 years.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                             </div>
                             <div className="col-lg-4">
                                 <div className="interest sticky-top">
                                     <h4>Interest</h4>
                                     <div className="text-wrap">
                                    
                                         <p>
                                         I love singing and love to watch historicaly movie. Also love gardening and software coding.
                                         </p>
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                        </ul>
                                     </div>
                                 </div>
                                 {/* <button className="btn btn-info btn-block">asdf</button> */}
                             </div>
                         </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                       <RightSidebar/>
                    </div>
                </div>       
            </div>
        </div>          
    );
};
