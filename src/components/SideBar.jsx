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
                <i className="fas fa-calculator"></i>
                <span>Caroline </span>
                </a>
            </li>
            <li>
                <a href="#">
                <i className="fas fa-flag"></i>
                <span>Lesson Plan</span>
                </a>
            </li>
            <li>
                <a href="#">
                <i className="fas fa-tasks"></i>
                <span>Supplementary classNameess</span>
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