/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react';
import CustomScroll from 'react-custom-scroll';
import { AppContext } from '../context/context';
import TaskCard from './TaskCard'
import RightSidebar from './rightSidebar';
import RecomendedPlayer from './Recomended/RecomendedPlayer';
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
                            <div className="col-lg-6">
                                <div className="test-history-progress">
                                    <div className="header d-flex">
                                        <span className="title mr-auto">English</span>
                                        <div className="input-group-prepend">
                                            <span data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-ellipsis-v"></i></span>
                                            <div className="dropdown-menu" x-placement="bottom-start">
                                                <a className="dropdown-item" href="#"> Edit</a>
                                                <a className="dropdown-item" href="#"> Delate</a>
                                                <a className="dropdown-item" href="#"> Report</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Class 040A </p>
                                    <p>Secondary 4 </p>
                                    <div className="content">
                                        <div className="progress_wrap">
                                            <div className="progress-active" style={{width:"25%"}}></div>
                                            <div className="mark_row">
                                            <span className="mark active"></span>
                                            <span className="mark active"></span>
                                            <span className="mark"></span>
                                            <span className="mark"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer text-right">
                                        Previous Test Score <strong>72/100</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="test-history-progress">
                                    <div className="header d-flex">
                                        <span className="title mr-auto">English</span>
                                        <div className="input-group-prepend">
                                            <span data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-ellipsis-v"></i></span>
                                            <div className="dropdown-menu" x-placement="bottom-start">
                                                <a className="dropdown-item" href="#"> Edit</a>
                                                <a className="dropdown-item" href="#"> Delate</a>
                                                <a className="dropdown-item" href="#"> Report</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Class 040A </p>
                                    <p>Secondary 4 </p>
                                    <div className="content">
                                        <div className="progress_wrap">
                                            <div className="progress-active" style={{width:"25%"}}></div>
                                            <div className="mark_row">
                                            <span className="mark active"></span>
                                            <span className="mark active"></span>
                                            <span className="mark"></span>
                                            <span className="mark"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer text-right">
                                        Previous Test Score <strong>72/100</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                                {subject_list.map(item => (
                                    <div className="col-lg-6">
                                        <TaskCard {...item} key={item.id} />
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
