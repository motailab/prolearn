import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { AppContext } from '../context/context';

export default function TaskCard(props) {

    let {link, index} = props;

    const { state } = useContext(AppContext);
    const [result, setResult] = useState({done: false, pass: false});
    const match = useRouteMatch();

    useEffect(() => {
        //checking is current element is active
        const item = state.completed_subject.filter(item =>  props.name === item.name);
        if(item.length) {
            setResult({done: item[0].done, pass: item[0].pass});
        }

        
    }, [state, props, link]);
    

    return (
        <NavLink to={link ? link : `${match.url}/subject/${props.name}/${props.id}`} activeClassName='activeRoute' isActive={(mat, location) => {
            if(mat) {
                return mat.isExact;
            }
            
            if(location.pathname === '/progress' && index === 0) {
                return true;
            }
        }}>
            <div className="taskbox">
                <div className="header">
                    <h4>{props.name} <span className="status"></span> </h4>
                    <p>Estimated Time: {props.time} Minutes</p>
                </div>
                <div className="content">
                    {props.text}
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
