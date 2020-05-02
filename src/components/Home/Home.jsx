import React from 'react'
import Calender from 'react-calendar';
import CircleProgressBar from '../CircleProgressBar/CircleProgressBar';
import 'react-calendar/dist/Calendar.css';

export default function Home(props) {
    
    const formatDate = (locale, date) => {
        const name = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        return name[date.getDay()];
    }
    return (
        <div className="home">
            <Calender defaultView="day" calendarType="US" showNavigation={false} formatShortWeekday={(locale, date) => formatDate(locale, date)}/>
            <CircleProgressBar 
             trailStrokeColor="gray"
             strokeColor="teal"
             percentage={75}
             innerText="complete"
            />
        </div>
    );
};
