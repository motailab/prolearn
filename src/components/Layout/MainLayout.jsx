import React, { useState } from 'react'
import SideBar from '../SideBar'
import Header from '../Header'
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
           
            <button className="btn menubtn" type="button" onClick={toggleSidebar}>
                <i className="fas fa-bars fa-2x"></i>
            </button>
            
            <SideBar isActive={showSidebar} toggleSidebar={toggleSidebar}/>
            <FullScreenConfetti />
            { children }
        </div>
    )
};
