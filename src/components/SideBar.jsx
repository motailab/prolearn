import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function SideBar() {

    return (
        <div className="sidebar off-canvas-sidebar">
            <Link to='/' className="logo"><img src={logo} alt=""/></Link>
            <ul>
            <li>
                <NavLink activeClassName="active" to="/subject">
                    <i className="fas fa-calculator"></i>
                    <span>Caroline </span>
                </NavLink>
            </li>
            <li>
                <a href="#">
                <i className="fas fa-flag"></i>
                <span>Lesson Plan</span>
                </a>
            </li>
            <li>
                <NavLink to="/supplimentary" activeClassName="active">
                    <i className="fas fa-tasks"></i>
                    <span>Supplementary classNameess</span>
                </NavLink>
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