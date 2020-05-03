import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import HorizontalTimeLine from '../../../utils/HorizontalTimeLine';

export default function SuplimentarySubject({score, ...props}) {
    const [showMenu, setShowMenu]  = useState(false);
    let match = useRouteMatch();

    const toggleDropDown = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu);
    }

    function hideDropDown() {
        setShowMenu(false);
    }


    useEffect(() => {
        const body = document.querySelector('body');
        body.addEventListener('click', hideDropDown);
        return () => {
            body.removeEventListener('click', hideDropDown);
        }
    }, []);

    return (
        <div className="col-lg-6">
            <Link to={{
                pathname: `${match.url}/${props.id}`,
                state: { subject_name: props.name }
            }}>
                <div className="test-history-progress">
                    <div className="header d-flex">
                        <span className="title mr-auto">{props.name}</span>
                        <div className="input-group-prepend position-relative" onClick={toggleDropDown}>
                            <span data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-ellipsis-v"></i></span>
                            <div className={`dropdown-menu ${showMenu ? 'show': null}`} x-placement="bottom-start">
                                <button className="dropdown-item" href="#"> Edit</button>
                                <button className="dropdown-item" href="#"> Delate</button>
                                <button className="dropdown-item" href="#"> Report</button>
                            </div>
                        </div>
                    </div>
                    <p>{props.class}</p>
                    <p>{props.grade}</p>
                    <div className="content">
                       <HorizontalTimeLine score={score}button/>
                    </div>
                    <div className="footer text-right">
                        Previous Test Score <strong>{score}/100</strong>
                    </div>
                </div>
            </Link>
            </div>
    );
};

