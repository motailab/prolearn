import React from 'react'
import Calender from 'react-calendar';
import CircleProgressBar from '../CircleProgressBar/CircleProgressBar';
import 'react-calendar/dist/Calendar.css';
import RightSidebar from '../RightSidebar';
import CustomButton from '../CustomButton/CustomButton'

export default function Home(props) {
    
    const formatDate = (locale, date) => {
        const name = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        return name[date.getDay()];
    }

    return (
        <div className="taskListContainer px-4">
            <div className="row">
                <div className="col-lg-8 col-md-6 overViweWrap home">
                    <div className="row">
                        <div className="col-lg-9">
                            <h4 className="title">Summary</h4>
                            <div className="box summary">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="first">4</h5>
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
                        <div className="col-lg-3">
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
                            <h4 className="title mb-3">Quote Of The Day</h4>
                            <div className="box quote">
                                <h3>“There are no shortcuts to any place worth going.”</h3>
                            </div>
                            <div className="box quote pt-4 pb-4">
                                <div className="w-100">
                                    <h3>“How was the last module”</h3>
                                    <div className="select-area mt-3 d-flex justify-content-center">
                                        <CustomButton id={1} name={'quot_1'} handleChange={'good'} key={'1'} checked={false}>Good</CustomButton>
                                        <CustomButton id={2} name={'quot_1'} handleChange={'awesome'} key={'2'} checked={false}>Awesome</CustomButton>
                                        <CustomButton id={2} name={'quot_1'} handleChange={'not_good'} key={'3'} checked={false}>Not that good</CustomButton>
                                    </div>
                                </div>
                            </div>
                            <div className="box quote pt-4 pb-4">
                                <div className="w-100">
                                    <h3>“How are you feeling today”</h3>
                                    <div className="select-area mt-3 d-flex justify-content-center">
                                        <CustomButton id={1} name={'quot_1'} handleChange={'good'} key={'1'} checked={false}>Good</CustomButton>
                                        <CustomButton id={2} name={'quot_1'} handleChange={'awesome'} key={'2'} checked={false}>Awesome</CustomButton>
                                        <CustomButton id={2} name={'quot_1'} handleChange={'not_good'} key={'3'} checked={false}>Not that good</CustomButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-9">
                            <h4 className="title">Calendar</h4>
                            <div className="calender">
                                 <Calender defaultView="day" calendarType="US" showNavigation={true} formatShortWeekday={(locale, date) => formatDate(locale, date)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                   <RightSidebar/>
                </div>
            </div>
        </div>          
    );

};
