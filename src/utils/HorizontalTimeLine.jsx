import React from 'react';

export default function HorizontalTimeLine({score}) {
    return (
        <div className="progress_wrap">
            <div className="progress-active" style={{width: score+'%'}}></div>
            <div className="mark_row">
                <span className={`mark ${score > 0 ? 'active' : ''}`}></span>
                <span className={`mark ${score >= 50 ? 'active' : ''}`}></span>
                <span className={`mark ${score >= 70 ? 'active' : ''}`}></span>
                <span className={`mark ${score === 100 ? 'active' : ''}`}></span>
            </div>
        </div>
    );
};
