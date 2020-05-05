/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react';
import CustomScroll from 'react-custom-scroll';
import { AppContext } from '../context/context';
import TaskCard from './TaskCard'
import RightSidebar from './RightSidebar';
import RecomendedPlayer from './RecomendedVideoPlayer/RecomendedPlayer';
import Spinner from './Spinner/Spinner';
import CircleProgressBar from './CircleProgressBar/CircleProgressBar';

export default function TaskListContainer(params) {
    const [subject_list, setSubjectList] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);

    const {state} = useContext(AppContext);

    useEffect(() => {
       setSubjectList(state.subjects);

       if(state.subjects.length > 0) {
            setShowSpinner(false);
       }
       
    }, [state]);

    return (
        <div className="taskListContainer px-4">
            <div className="row">
                <div className="col-lg-8 col-md-6 overViweWrap overview_footer_paddiing">
                    <CustomScroll heightRelativeToParent="100%">
                        <a href="#" className="overview"> <i className="fas fa-caret-left"></i> OverView</a>
                        <h1 className="title">Todays Task</h1>
                        <div className="row">
                                {subject_list.map(item => (
                                    <div className="col-lg-6" key={item.id}>
                                        <TaskCard {...item}  />
                                    </div>
                                ))}
                        </div>
                        <h4 className="title mb-3 mt-3">Recomended Tasks</h4>
                        <div className="row">
                            {
                                showSpinner ?
                                    <Spinner />
                                :
                                (
                                    <>
                                      <RecomendedPlayer url="http://media.w3.org/2010/05/bunny/movie.mp4" />
                                      <RecomendedPlayer url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
                                    </>
                                 )
                            }
                        </div>
                    </CustomScroll>
                    <div className="over_viwe_footer">
                        <div className="row">
                            <div className="col-2">
                                <h4 className="title mb-3">Progress</h4>
                                <div className="box">
                                    <CircleProgressBar 
                                        trailStrokeColor="#C4C4C4"
                                        strokeColor="#37A0F6"
                                        percentage={75}
                                        innerText="complete"
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <h4 className="title mb-3">Quote Of The Day</h4>
                                <div className="box quote">
                                   <h3>“There are no shortcuts to any place worth going.”</h3>
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
