import React, { useRef, useEffect, useContext } from 'react';
import confetti from 'canvas-confetti';
import { AppContext } from '../../context/context';
import { TYPES } from '../../context/reducers';

export default function FullScreenConfetti() {
    const canvas = useRef();
    const {state: {confetti: {show, showTime, message}}, dispatch} = useContext(AppContext);

    useEffect(() => {
        const end = Date.now() + (showTime * 1000);
        let myConfetti = (canvas.current ? canvas.current.confetti : null) || confetti.create(canvas.current, {resize: true});;
        let setTimeOutId;

        if(canvas.current) {
            canvas.current.style.width ='100%';
            canvas.current.style.height='100%';
            // ...then set the internal size to match
            canvas.current.width  = canvas.current.offsetWidth;
            canvas.current.height = canvas.current.offsetHeight;
    
            var colors = ['#E7077A', '#F6EE37', '#37A0F6'];
    
            (function frame() {
                myConfetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors,
                    shapes: ['circle', 'square', 'lines']
                });
                myConfetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors,
                    shapes: ['circle', 'square', 'lines']
                });
    
                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
    
            setTimeOutId = setTimeout(() => {
    
                dispatch({
                    type: TYPES.HIDE_CONFETTI
                });
    
                if(!show) {
                    clearTimeout(setTimeOutId);
                }
    
            }, (showTime * 1000));
        }

        return () => {
            myConfetti.reset();
            clearTimeout(setTimeOutId);
        }

    }, [show]);


    return (
        <>
            {show ?
                <div className="full-screen-confetti">
                    <canvas ref={canvas} width="100%" height="100%">
                    </canvas>
                    <div className="message">
                        <h2>Congratulation!</h2>
                        <h5>You’re done with <span className="highlight">{message}</span></h5>
                    </div>
                </div>
            : null
            }
        </>
    )
};
