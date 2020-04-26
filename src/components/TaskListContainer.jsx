import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/context';
import TaskCard from './TaskCard'

export default function TaskListContainer(params) {
    const [subject_list, setSubjectList] = useState([]);
    const {state} = useContext(AppContext);

    useEffect(() => {
       setSubjectList(state.subjects);
    }, [state]);

    return (
        <div className="taskListContainer p-4">
            <h4>OverView</h4>
            <h3>Todays Task</h3>
            <div className="row">
                {subject_list.map(item => (
                    <TaskCard {...item} key={item.id} />
                ))}
            </div>
        </div>
    );

};
