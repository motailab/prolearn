import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/context';
import Component from '../utils/Components';
import RightSidebar from './RightSidebar';
import CountDown from './CountDown/CountDown';

export default function TaskContainer(params) {
    const [selectedTask, setSelectedTask] = useState(undefined);
    const [timeEnd, setTimeEnd] = useState(false);
    const {state:{subjects}} = useContext(AppContext);
    const { name } = useParams();

    useEffect(() => {
        let index = subjects.findIndex(item => item.title === name);
        setSelectedTask(prev => (index >= 0 ? subjects[index] : null));
    }, [subjects, name]);

    const onFinish = () => {
        setTimeEnd(true);
    }

    return (
        <div className="taskListContainer px-4">
            <div className="row">
                <div className="col-md-8 overViweWrap home">
                    {selectedTask ? <Component name={name.toLowerCase()} subject={selectedTask} timeEnd={timeEnd} /> : <h3>Component not ready</h3>}
                </div>
                <div className="col-md-4">
                    <CountDown  duration={selectedTask ? selectedTask.duration : 0} onFinish={onFinish} />
                    <RightSidebar />
                </div>
            </div>
        </div>  

    )
};
