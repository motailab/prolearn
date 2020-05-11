import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { AppContext } from '../context/context';

export default function TaskCard(props) {

    let {title, duration, description, link, index, ...rest} = props;

    const { state } = useContext(AppContext);
    const [result, setResult] = useState({done: false, pass: false});
    const match = useRouteMatch();

    useEffect(() => {
        //checking is current element is active
        const item = state.completed_subject.filter(item =>  title === item.name);
        if(item.length) {
            setResult({done: item[0].done, pass: item[0].pass});
        }

        
    }, [state, title, link]);
    

    return (
        <NavLink to={link ? link : match.url+'/subject/'+ title} activeClassName='activeRoute' isActive={(mat, location) => {
            if(mat) {
                return mat.isExact;
            }
            
            if(location.pathname === '/progress' && index === 0) {
                return true;
            }
        }}>
            <div className="taskbox">
                <div className="header">
                    <h4>{title ? title : 'History'} <span className="status"></span> </h4>
                    <p>Estimated Time: {duration ? duration : '20'} Minutes</p>
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
