import React from 'react'
import Latex from 'react-latex';
import diagram from '../../assets/images/diagram.svg';
import CustomButton from '../CustomButton/CustomButton'

export default function Question({title, question, ...props}) {
    const activeQs = props.activeQs;
    title = question.hasImage ? (<p>{title.split('--')[0]}<br/> <img src={diagram} alt=''/> <br/>{title.split('--')[1]}</p>) : <p>{title}</p>;

    return (
        <div className={`card p-4 text-center m-4 shadow rounded question-container ${activeQs.has(question.id) !== false ? '' : 'not-active'}`}>

            {title}

            <div className="select-area d-flex justify-content-center">
                {question.guesses && question.guesses.map((item) => (
                    <CustomButton id={item.guess} name={`question-${question.id}`} handleChange={() => props.handleChange({...item, question_id: question.id})} key={item.id} checked={false}>
                       <Latex>{item.guess}</Latex> 
                    </CustomButton>
                ))}
            </div>
        </div>
    )
};
