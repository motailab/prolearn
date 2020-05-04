import React, { useEffect, useRef, useState} from 'react';


export default function Timer({duration, onFinish, onStart, onHalf}) {
    const timerRef = useRef();
    const [warning, setWarning] = useState(false);

    const startTimer = (duration) => {
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
                setWarning(true);
            }

            if (time <= 0) {
                clearInterval(IntervalId);
                if(onFinish) onFinish();
            }

            --time;

        }, 1000);

        return IntervalId;
    }

    useEffect(() => {
        let id = startTimer(duration);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="card p-4 text-center">
           <div className="counter-wrapper">
                <div className={`counter ${warning ? 'warning' : ''}`} ref={timerRef}></div>
                <h4>Time Remening</h4>
           </div>
        </div>
    )
};
