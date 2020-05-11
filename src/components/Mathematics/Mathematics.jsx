import React, { useEffect } from 'react';
import RewardExercise from '../RewardClassContainer/RewardExercise/RewardExercise';

export default function Mathematics({timeEnd, ...rest}) {

    useEffect(() => {

        if(timeEnd) {
            console.log('time finished');
        }

    }, [timeEnd]);

    return (
        <>
            <RewardExercise asAChild={true} dataUrl={'fraction'} timeEnd={timeEnd}/>
        </>
    )
};
