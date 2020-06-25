import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomScroll from 'react-custom-scroll';
import CircleProgressBar from '../CircleProgressBar/CircleProgressBar';
import RightSidebar from '../RightSidebar';
import CustomButton from '../CustomButton/CustomButton'
import Summary from '../Summary/Summary';
import { fetchData } from '../../utils/client';
import 'react-calendar/dist/Calendar.css';

export default function Home(props) {
    const [quoteOfTheDay, setQuoteOfTheDay] = useState(null);
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        //getting quote of the day and questions
        axios.all([
            fetchData('/home/quote'),
            fetchData('/home/questions')
        ])
        .then(axios.spread((quote, questions) => {
            setQuoteOfTheDay(quote.data.text);
            setQuestions(questions.data);
        }))
        .catch(error => {
            console.log(error);
        });

    },[]);


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
                                <div className="skeleton-box" style={{width: "40%", display: `${quoteOfTheDay !== null ? 'none': 'inline-block'}`}}></div>
                                <h3>{quoteOfTheDay}</h3>
                            </div>

                            {questions ? questions.map((question, index) => (
                                <div className="box quote pt-4 pb-4" key={index}>
                                    <div className="w-100">
                                        <h3>{question.name}</h3>
                                        <div className="select-area mt-3 d-flex justify-content-center">
                                            <CustomButton id={Math.random() * 10000} name={'quot_1'}>Good</CustomButton>
                                            <CustomButton id={Math.random() * 10000} name={'quot_1'}>Awesome</CustomButton>
                                            <CustomButton id={Math.random() * 10000} name={'quot_1'}>Not that good</CustomButton>
                                        </div>
                                    </div>
                                </div>
                            )) :
                                (<>
                                    <div className="box quote pt-4 pb-4">
                                        <div className="w-100">
                                            <div className="skeleton-box" style={{width: "30%"}}></div>
                                            <div className="select-area mt-3 d-flex justify-content-center">
                                                <div className="skeleton-box mx-4" style={{width: "10%", height: '30px', borderRadius: '5px'}}></div>
                                                <div className="skeleton-box mx-4" style={{width: "10%", height: '30px', borderRadius: '5px'}}></div>
                                                <div className="skeleton-box mx-4" style={{width: "10%", height: '30px', borderRadius: '5px'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box quote pt-4 pb-4">
                                        <div className="w-100">
                                            <div className="skeleton-box" style={{width: "30%"}}></div>
                                            <div className="select-area mt-3 d-flex justify-content-center">
                                                <div className="skeleton-box mx-4" style={{width: "10%", height: '30px', borderRadius: '5px'}}></div>
                                                <div className="skeleton-box mx-4" style={{width: "10%", height: '30px', borderRadius: '5px'}}></div>
                                                <div className="skeleton-box mx-4" style={{width: "10%", height: '30px', borderRadius: '5px'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </>)
                            }

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
