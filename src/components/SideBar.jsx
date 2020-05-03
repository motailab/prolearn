import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function SideBar(props) {

    const checkActive = (match, location) => {
        if(!location) return false;
        const {pathname} = location;
        return pathname === "/";
    }

    return (
        <div className="sidebar off-canvas-sidebar">
            <NavLink to='/' className="logo"><img src={logo} alt=""/></NavLink>
            <ul>
            <li>
                <NavLink to="/" activeClassName="active" isActive={checkActive}>
                    <i className="fas fa-user-tie"></i>
                    <span>Caroline </span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/lession">
                    <i className="fas fa-book"></i>
                    <span>Lesson Plan</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/suplimentary" activeClassName="active">
                    <i className="fas fa-tasks"></i>
                    <span>Supplementary classNameess</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/setting">
                    <i className="fas fa-cog"></i>
                    <span>Manage</span>
                </NavLink>
            </li>
            </ul>
        </div>
    )
}

export default SideBar;