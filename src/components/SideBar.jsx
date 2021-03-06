import React from 'react';
import {NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function SideBar({isActive, toggleSidebar}) {

    return (
        <div className={`sidebar off-canvas-sidebar ${isActive ? 'open' : ''}`}>

            <button className="btn menubtn" onClick={toggleSidebar}><i class="fas fa-times"></i></button>

            <NavLink to='/prolearn' className="logo"><img src={logo} alt=""/></NavLink>
            <ul>
                <li>
                    <NavLink to="/home" activeClassName="active" >
                        <i className="fas fa-home"></i>
                        <span>Home </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/learning-path">
                        <i className="fas fa-road"></i>
                        <span>Learning Path</span>
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to="/rewards" activeClassName="active">
                        <i className="fas fa-gift"></i>
                        <span>Rewards</span>
                    </NavLink>
                </li> */}
                <li>
                    <NavLink to="/progress" activeClassName="active">
                        <i className="fas fa-chart-line"></i>
                        <span>Progress</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                        <i className="fas fa-user"></i>
                        <span>Profile</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;