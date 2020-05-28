import React, { useState, useRef, useEffect } from 'react'
import flag from '../assets/images/flag.png';

function Header({ toggleSidebar }) {
    const [dropdownOpen, setDropDownOpen] = useState(false);
    const dropDownRef = useRef();

    useEffect(() => {
        //detecting click outside of dropdown and hiding element
        const handleOutsideClick = (e) => {
            if(dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setDropDownOpen(false);
            }
        }

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    });

    return (
        <header className="sticky-top">
            <form action="#" method="POST">
                <div className="input-group searchWrap align-items-center">
                    <div className="input-group-prepend border-left">
                        {/* <div className={`btn-group ${dropdownOpen ? 'show' : ''}`} onClick={() => setDropDownOpen(!dropdownOpen)} ref={dropDownRef}>
                            <span className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={flag} alt=""/>
                            </span>
                            <div className={`dropdown-menu flag-container ${dropdownOpen ? 'show' : ''}`}>
                                <a className="dropdown-item" href="#"><img src={flag} alt=""/></a>
                                <a className="dropdown-item" href="#"><img src={flag} alt=""/></a>
                                <a className="dropdown-item" href="#"><img src={flag} alt=""/></a>
                            </div>
                        </div> */}
                        <button className="btn menubtn" type="button" onClick={toggleSidebar}>
                            <i className="fas fa-bars fa-2x"></i>
                        </button>
                    </div>
                    <div className="input-group-prepend search_icon">
                        <i className="fas fa-search"></i>
                        </div>
                        <input type="text" className="form-control search" placeholder="Search for an Account"/>
                        <div className="input-group-prepend border-left">
                        <i className="far fa-clock"></i>
                    </div>
                </div>
            </form>
        </header>
    );

}

export default Header;
