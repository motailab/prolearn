import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/context';

export default function TaskCard({title, duration, description, ...rest}) {
    const { state } = useContext(AppContext);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const item = state.completed_subject.filter(item =>  title === item.name);
        if(item.length) {
            setIsDone(item[0].done);
        }

    }, [state, title]);

    return (
        <div className={rest.column ? rest.column : 'col-md-4'}>
            <NavLink to={'/subject/'+ title} activeClassName='activeRoute'>
                <div class="taskbox">
                    <div className="header">
                        <h2>{title ? title : 'History'} <span className="status"></span> </h2>
                        <p><strong>Estimated Time: {duration ? duration : '2 hours'}</strong></p>
                    </div>
                    <div className="content">
                        {description ? description : 'Questions about Modern World History will help you to understand even deeper about history.'}
                    </div>
                    <div className={isDone ? 'done' : 'd-none'}>
                        <span className="text">Done !</span>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};
