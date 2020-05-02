import React, { useState, useEffect, useContext } from 'react';
import CustomScroll from 'react-custom-scroll';
import { AppContext } from '../context/context';
import TaskCard from './TaskCard';
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
        <div className="taskListContainer p-4">
            <h4>OverView</h4>
            <h3>Today's Task</h3>
            <div className="row">
                <div className="col-md-8" style={{height: "100vh", display: "flex"}}>
                    <CustomScroll heightRelativeToParent="100%">
                        <div className="row">
                            {subject_list.map(item => (
                                <TaskCard {...item} key={item.id} />
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

                <div className="col-md-4">
                    <h5>Third Column</h5>
                </div>
            </div>
        </div>
    );

};
