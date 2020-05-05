import React, { useEffect, useRef, useState} from 'react';


export default function Timer({duration, onFinish, onStart, onHalf, stopTimer}) {
    const timerRef = useRef();
    const [warning, setWarning] = useState(false);

    const startTimer = (duration = 0) => {
        let time = duration*60, minutes, seconds;
        //notifying onStart Listener
        
        if(onStart) {
            onStart();
        }

        let IntervalId = setInterval(() => {
            minutes = parseInt(time / 60, 10);
            seconds = parseInt(time % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            timerRef.current.textContent = `${minutes}:${seconds}`;

            if(time === (duration / 2)) {
                if(onHalf) onHalf();
            }

            if(!warning && (time - Math.floor(duration*60/5)) <= 0) {
                //show timer warning if time getting lower
                setWarning(true);
            } else if(time === (duration * 60)) {
                // hide timer warning if reinitilize component 
                setWarning(false);
            }

            if (time <= 0) {
                clearInterval(IntervalId);
                if(onFinish) {
                    onFinish();
                }
            }
            --time;

        }, 1000);

        return IntervalId;
    }

    useEffect(() => {
        let id;
        
        if(stopTimer) {
            clearInterval(id);
        }

        if(duration && !stopTimer) {
            id = startTimer(duration);
        }

        return () => clearInterval(id);
    }, [duration, stopTimer]);

    return (
        <div className="card p-4 text-center">
           <div className="counter-wrapper">
                <div className={`counter ${warning ? 'warning' : ''}`} ref={timerRef}></div>
                <h4>Time Remening</h4>
           </div>
        </div>
    )
};
