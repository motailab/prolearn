import React from 'react';
import Latex from 'react-latex';
import CustomButton from '../../../CustomButton/CustomButton';

export default function MathQuestion({question, onSelect, isEnable, index, result}) {

    console.log(index === 0);
    return (
        <div className="col-md-8 offset-md-2">
            <div className={`d-flex justify-content-center question-container ${isEnable ? '' : 'not-active'}`}>
                <div className="math-question">
                    <Latex>{question.question}</Latex>
                </div>
                <div className="assignment">
                    <i className="fas fa-equals"></i>
                </div>
                <div className="guesses d-flex justify-content-between">
                    {question.guesses.map(guess => (
                        <CustomButton 
                        id={Math.random()} 
                        name={question.question} 
                        handleChange={() => 
                        onSelect({guess: guess.id, question_id: question.id, index})}
                        className={result && result.guess === guess.id ? `${result.correct ? 'correct' : 'wrong'}` : ''} 
                        key={guess.id}>
                             <Latex>
                               {guess.text}
                            </Latex>
                        </CustomButton>
                    ))}
                </div>
            </div>
        </div>
    )
};
