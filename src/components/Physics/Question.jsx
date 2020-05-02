import React from 'react'
import Latex from 'react-latex';
import diagram from '../../assets/images/diagram.svg';
import CustomButton from '../CustomButton/CustomButton'

export default function Question({title, question, ...props}) {
    const activeQs = props.activeQs;
    title = question.hasImage ? (<p className="mb-0">{title.split('--')[0]}<br/><br/> <img src={diagram} alt=''/> <br/><br/>{title.split('--')[1]}</p>) : <p className="mb-0">{title}</p>;

    return (
        <div className={`box text-center question-container ${activeQs.has(question.id) !== false ? '' : 'not-active'}`}>

           <div className="row">
               <div className="col-md-8 offset-md-2">
                    {title}
               </div>
           </div>

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
