/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react';
import CustomScroll from 'react-custom-scroll';
import { AppContext } from '../context/context';
import TaskCard from './TaskCard'
import RightSidebar from './rightSidebar';
import RecomendedPlayer from './RecomendedVideoPlayer/RecomendedPlayer';
import Spinner from './Spinner/Spinner';

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
                <div className="col-lg-8 col-md-6 overViweWrap">
                    <a href="#" className="overview"> <i className="fas fa-caret-left"></i> OverView</a>
                    <h1 className="title">Todays Task</h1>
                    <CustomScroll heightRelativeToParent="100%">
                        <div className="row">
                                {subject_list.map(item => (
                                    <div className="col-lg-6" key={item.id}>
                                        <TaskCard {...item}  />
                                    </div>
                                ))}
                        </div>
                        <h4>Recomended Tasks</h4>
                        <div className="row">
                            {
                                showSpinner ?
                                    <Spinner />
                                :
                                (
                                    <>
                                      <RecomendedPlayer />
                                      <RecomendedPlayer />
                                    </>
                                 )
                            }
                        </div>
                    </CustomScroll>
                </div>
                <div className="col-lg-4 col-md-6">
                   <RightSidebar/>
                </div>
            </div>
        </div>          
    );
};
