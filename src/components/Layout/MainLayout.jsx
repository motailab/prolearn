import React from 'react'
import SideBar from '../SideBar'
import FullScreenConfetti from '../FullScreenConfetti/FullScreenConfetti'

export default function MainLayout({children}) {
    return (
        <div className="main-panel">
            <SideBar />
            <FullScreenConfetti />
            { children }
        </div>
    )
};
