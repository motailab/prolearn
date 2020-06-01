import React from 'react';
import CircleProgressBar from '../CircleProgressBar/CircleProgressBar';
import 'react-calendar/dist/Calendar.css';
import RightSidebar from '../RightSidebar';
import CustomButton from '../CustomButton/CustomButton'
import Summary from '../Summary/Summary';
import CustomScroll from 'react-custom-scroll';

export default function Home(props) {
    
    return (
        <div className="taskListContainer p-4">
            <div className="row">
                <div className="col-lg-8 col-md-7 overViweWrap home">
                  <CustomScroll heightRelativeToParent="100vh">
                    <div className="row">
                        <Summary />
                        <div className="col-xl-3">
                            <h4 className="title">Countdown</h4>
                            <div className="box">
                                <div className="circleProgressBar">
                                    <CircleProgressBar 
                                    trailStrokeColor="#DEE5ED"
                                    strokeColor="teal"
                                    percentage={75}
                                    innerText="complete"
                                  />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-12">
                            {/* <h4 className="title mb-3">Quote Of The Day</h4> */}
                            <div className="box quote">
                                <h3>“There are no shortcuts to any place worth going.”</h3>
                            </div>
                            <div className="box quote pt-4 pb-4">
                                <div className="w-100">
                                    <h3>“How was the last module”</h3>
                                    <div className="select-area mt-3 d-flex justify-content-center">
                                        <CustomButton id={1} name={'quot_1'}>Good</CustomButton>
                                        <CustomButton id={2} name={'quot_1'}>Awesome</CustomButton>
                                        <CustomButton id={3} name={'quot_1'}>Not that good</CustomButton>
                                    </div>
                                </div>
                            </div>
                            <div className="box quote pt-4 pb-4">
                                <div className="w-100">
                                    <h3>“How are you feeling today”</h3>
                                    <div className="select-area mt-3 d-flex justify-content-center">
                                        <CustomButton id={1} name={'quot_1'}  key={1}>Good</CustomButton>
                                        <CustomButton id={2} name={'quot_1'}  key={2}>Awesome</CustomButton>
                                        <CustomButton id={3} name={'quot_1'}  key={3}>Not that good</CustomButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </CustomScroll>
                </div>
                <div className="col-lg-4 col-md-5">
                    
                    <RightSidebar/>
                   
                </div>
            </div>
        </div>          
    );

};
