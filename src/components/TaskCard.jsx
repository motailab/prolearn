import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/context';

export default function TaskCard({title, duration, description, ...rest}) {
    const { state } = useContext(AppContext);
    const [result, setResult] = useState({done: false, pass: false});

    useEffect(() => {
        const item = state.completed_subject.filter(item =>  title === item.name);
        if(item.length) {
            setResult({done: item[0].done, pass: item[0].pass});
        }

    }, [state, title]);

    return (
        // <div className={rest.column ? rest.column : 'col-md-4'}>

        // </div>

        <NavLink to={'/subject/'+ title} activeClassName='activeRoute'>
        <div className="taskbox">
            <div className="header">
                <h4>{title ? title : 'History'} <span className="status"></span> </h4>
                <p>Estimated Time: {duration ? duration : '2 hours'}</p>
            </div>
            <div className="content">
                {description ? description : 'Questions about Modern World History will help you to understand even deeper about history.'}
            </div>
            <div className={result.done && result.pass ? 'done' : 'd-none'}>
                <span className="text">Done !</span>
            </div>
            <div className={result.done === true && result.pass === false ? 'fail' : 'd-none'}>
                <span className="text">Opps.. Try again !</span>
            </div>
        </div>
    </NavLink>
    );
};
