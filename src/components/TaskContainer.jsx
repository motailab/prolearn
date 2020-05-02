import React, { useState, useEffect, useContext } from 'react';
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
        <div className="row">
            <div className="col-md-4">
                {subjects && subjects.map(item => (<TaskCard {...item}  column='col-md-12' key={item.id} />))}
            </div>
            <div className="col-md-8">
                {selectedTask ? <Component name={name.toLowerCase()} subject={selectedTask} /> : <h3>Component not ready</h3>}
            </div>
        </div>
    )
};
