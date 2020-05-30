import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CustomScroll from 'react-custom-scroll';
import { AppContext } from '../../context/context';
import { TYPES } from '../../context/reducers';
import Question from './Question';
import { Link } from 'react-router-dom';


export default function Physics({subject, ...rest}) {
    const {state, dispatch} = useContext(AppContext);
    const history = useHistory();
    const [activeQs, setActiveQs] = useState(new Set([1]));
    const [guesses, setGuesses] = useState([]);
    const [ready, setReady] = useState(true);

    const handleChange = (item) => {

        //activing next question active after user chose one
        activeQs.add(item.question_id+1);
        setActiveQs(activeQs);

        //loping over guess for checking that question allready answered or not
        let found = false;
        for(let guess of guesses) {
            if(guess.question_id === item.question_id) {
                guess.guess_id = item.id;
                found = true;
            }
        }

        //checking guess found or not
        if(!found) {
            setGuesses([...guesses, {question_id: item.question_id, guess_id: item.id}]);
        } else {
            setGuesses([...guesses]);
        }

        //all question answerded or not
        setReady(subject.questions.length !== activeQs.size-1);

    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        let correct_ans = 0;
        for (let i in  guesses) {
            if(guesses[i].question_id === subject.answers[i].question && guesses[i].guess_id === subject.answers[i].guess) {
                correct_ans += 1;
            } 
        }

        dispatch({
            type: TYPES.TASK_DONE,
            payload: {
                name: subject.title,
                id: subject.id,
                done: true,
                pass: correct_ans >= Math.round(subject.answers.length/2)
            }
        });

        //redirect back to learning path
        history.replace('/learning-path');
    }

    useEffect(() => {
        const item = state.completed_subject.filter(item => item.id === subject.id);
        //reset course state for redo
        if(item.length && item[0].done) {
            dispatch({
                type: TYPES.TASK_DONE,
                payload: {
                    done: false,
                    name: subject.title,
                    id: subject.id
                }
            });
        }
        
    }, [subject]);


    return (
        <div className="physics">
            {/* <a href="#" className="overview" onClick={goBack}><i className="fas fa-caret-left"></i> Back</a> */}
            <h4 className="title mb-3"><Link className="overview" to="/todays-task"><i className="fas fa-caret-left"></i> Back </Link> || Physics</h4>
            <div className="question-area" style={{height: "85vh", display: "flex"}}>
                <CustomScroll heightRelativeToParent="100%">
                    {/** question and guess component**/}
                    {subject && subject.questions && subject.questions.map(item => (
                        <Question  handleChange={handleChange} title={item.question} key={item.title+'-'+item.id} question={item} activeQs={activeQs} />
                    ))}
                    {/**submit button */}
                    <div className="form-group text-center">
                        <button className="btn btn-info pl-5 pr-5" onClick={handleSubmit} type="button" disabled={ready}>Submit</button>
                    </div>
                </CustomScroll>
            </div>
        </div>
    )
};
