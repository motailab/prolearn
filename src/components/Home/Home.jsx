import React, { useEffect, useContext } from 'react';
import CircleProgressBar from '../CircleProgressBar/CircleProgressBar';
import RightSidebar from '../RightSidebar';
import CustomButton from '../CustomButton/CustomButton'
import Summary from '../Summary/Summary';
import { AppContext } from '../../context/context';
import TYPES from '../../context/actionTypes';
import { fetchData } from '../../utils/client';
import 'react-calendar/dist/Calendar.css';

export default function Home(props) {
    const {state, dispatch} = useContext(AppContext);
    useEffect(() => {

    },[]);


    return (
        <div className="taskListContainer px-4">
            <div className="row">
                <div className="col-lg-8 col-md-6 overViweWrap home">
                    <div className="row">
                        <Summary />
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
                </div>
                <div className="col-lg-4 col-md-6">
                   <RightSidebar/>
                </div>
            </div>
        </div>          
    );

};
