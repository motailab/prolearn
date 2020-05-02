import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function SideBar() {

    return (
        <div className="sidebar off-canvas-sidebar">
            <Link to='/' className="logo"><img src={logo} alt=""/></Link>
            <ul>
            <li>
                <a className="active" href="#">
                    <i className="fas fa-user-tie"></i>
                    <span>Caroline </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fas fa-book"></i>
                    <span>Lesson Plan</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fas fa-journal-whills"></i>
                    <span>Supplementary class</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fas fa-cog"></i>
                    <span>Manage</span>
                </a>
            </li>
            </ul>
        </div>
    )
}

export default SideBar;