import React from 'react'
import SideBar from '../SideBar'
import Header from '../Header';
import FullScreenConfetti from '../FullScreenConfetti/FullScreenConfetti'

export default function MainLayout({children}) {
    return (
        <div className="main-panel">
            <Header />
            <SideBar />
            <FullScreenConfetti />
            { children }
        </div>
    )
};
