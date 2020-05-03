import React, { useState, useEffect, useContext } from 'react';
import CustomScroll from 'react-custom-scroll';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/context';
import TaskCard from './TaskCard';
import Component from '../utils/Components';

export default function TaskContainer(params) {
    const [selectedTask, setSelectedTask] = useState(undefined);
    const {state:{subjects}} = useContext(AppContext);
    const { name } = useParams();

    useEffect(() => {
        let index = subjects.findIndex(item => item.title === name);
        setSelectedTask(prev => (index >= 0 ? subjects[index] : null));
    }, [subjects, name]);

    return (
        <div className="taskListContainer px-4">
            <div className="row">
                <div className="col-md-4 overViweWrap">
                    <div className="scroll_area" style={{height:"85vh"}}>
                        <CustomScroll heightRelativeToParent="100%">
                            <a href="#" className="overview"> <i className="fas fa-caret-left"></i> OverView</a>
                            <h1 className="title">Todays Task</h1>
                            <div className="row">
                                    {subjects && subjects.map(item => (
                                        <div className="col-lg-12" key={item.id}>
                                            <TaskCard {...item} />
                                        </div>
                                    ))}
                            </div>
                        </CustomScroll>
                    </div>
                </div>
                <div className="col-md-8">
                    {selectedTask ? <Component name={name.toLowerCase()} subject={selectedTask} /> : <h3>Component not ready</h3>}
                    {/* {selectedSubject ? <Component name={name.toLowerCase()} subject={selectedSubject} /> : <h3 className="mt-5 pt-5 text-center">Component not ready</h3>} */}
                </div>
            </div>
        </div>  

    )
};
