import React, { useEffect } from 'react';
import  { Link } from 'react-router-dom';
import RewardExercise from '../RewardClassContainer/RewardExercise/RewardExercise';

export default function Mathematics({timeEnd, ...rest}) {

    useEffect(() => {

        if(timeEnd) {
            console.log('time finished');
        }

    }, [timeEnd]);

    return (
        <>
             <Link className="overview" to="/todays-task"><i className="fas fa-caret-left"></i> Back </Link>

            <RewardExercise asAChild={true} dataUrl={'fraction'} timeEnd={timeEnd}/>
        </>
    )
};
