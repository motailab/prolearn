import React, { useState } from 'react';
import Question from './Question';

export default function Physics({subject, ...rest}) {
    const [activeQs, setActiveQs] = useState(1);

    const handleChange = (item) => {
        setActiveQs(item.question_id+1);
    }
    
    return (
        <div className="physics">
            <h4>Physics</h4>
            <div className="question-area">
                {subject && subject.questions.map(item => (
                    <Question  handleChange={handleChange} title={item.question} key={item.id} question={item} activeQs={activeQs} />
                ))}
            </div>
        </div>
    )
};
