import React, { useState } from 'react'
import SideBar from '../SideBar'
import Header from '../Header'
import {NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import FullScreenConfetti from '../FullScreenConfetti/FullScreenConfetti'

export default function MainLayout({children}) {
    const [showSidebar, setShowSidebar] = useState(false);


    const toggleSidebar = (e) => {
        e.preventDefault();
        console.log('got clicked on humberger');
        setShowSidebar(!showSidebar);
    }

    return (
        <div className="main-panel">
            {/* <Header/> */}
            {/* when searchbar is hidden then show this button for show hide menu */}
           
           <div className="sidebarHeader">
               <div className="w-100 d-flex">
                    <NavLink to='/prolearn' className="logo mr-auto"><img src={logo} alt=""/></NavLink>
                    <button className="btn menubtn" type="button" onClick={toggleSidebar}>
                       <i className="fas fa-bars fa-2x"></i>
                    </button>
               </div>
           </div>

            <SideBar isActive={showSidebar} toggleSidebar={toggleSidebar}/>
            <FullScreenConfetti />
            { children }
        </div>
    )
};
