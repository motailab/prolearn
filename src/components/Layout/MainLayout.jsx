import React, {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import SideBar from '../SideBar'
import Header from '../Header'
import FullScreenConfetti from '../FullScreenConfetti/FullScreenConfetti'

export default function MainLayout({children}) {

    // const [showHeader, setShowHeader] =  useState(true); 
    // const history = useHistory(); 
    // useEffect(()=>{
    //     console.log(history);
    //     if(history.location.pathname === '/profile'){
    //         setShowHeader(false);
    //     }
    // })

    return (
        <div className="main-panel">
             {/* {showHeader ? <Header/> : null } */}
             {/* <Header/> */}
            <SideBar />
            <FullScreenConfetti />
            { children }
        </div>
    )
};
