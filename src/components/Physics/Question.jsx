import React from 'react'
import Latex from 'react-latex';

import CustomButton from '../CustomButton/CustomButton'

export default function Question({title, question, ...props}) {
    return (
        <div className={`card p-4 text-center m-4 shadow-sm rounded question-container ${question.id <= props.activeQs ? '' : 'not-active'}`}>
            <p>{title}</p>
            <div className="select-area d-flex justify-content-center">
                {question.guesses && question.guesses.map((item) => (
                    <CustomButton id={item.guess} name={`question-${question.id}`} handleChange={() => props.handleChange({...item, question_id: question.id})} key={item.id}>
                       <Latex>{item.guess}</Latex> 
                    </CustomButton>
                ))}
            </div>
        </div>
    )
};
