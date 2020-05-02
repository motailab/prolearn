import React, { useState, useEffect } from 'react'

export default function SuplimentarySubject(params) {
    const [showMenu, setShowMenu]  = useState(false);

    const toggleDropDown = () => {
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
            <div className="test-history-progress">
                <div className="header d-flex">
                    <span className="title mr-auto">English</span>
                    <div className="input-group-prepend position-relative" onClick={toggleDropDown}>
                        <span data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-ellipsis-v"></i></span>
                        <div className={`dropdown-menu ${showMenu ? 'show': null}`} x-placement="bottom-start">
                            <a className="dropdown-item" href="#"> Edit</a>
                            <a className="dropdown-item" href="#"> Delate</a>
                            <a className="dropdown-item" href="#"> Report</a>
                        </div>
                    </div>
                </div>
                <p>Class 040A </p>
                <p>Secondary 4 </p>
                <div className="content">
                    <div className="progress_wrap">
                        <div className="progress-active" style={{width:"25%"}}></div>
                        <div className="mark_row">
                        <span className="mark active"></span>
                        <span className="mark active"></span>
                        <span className="mark"></span>
                        <span className="mark"></span>
                        </div>
                    </div>
                </div>
                <div className="footer text-right">
                    Previous Test Score <strong>72/100</strong>
                </div>
            </div>
        </div>
    );
};
