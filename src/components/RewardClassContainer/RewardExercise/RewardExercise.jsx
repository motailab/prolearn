import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';
import { AppContext } from '../../../context/context';
import  TYPES  from '../../../context/actionTypes';
import { fetchData } from '../../../utils/dataClient';
import Spinner from '../../Spinner/Spinner';
import MathQuestion from './MathQuestion/MathQuestion';
import CountDown from '../../CountDown/CountDown';
import RightSidebar from '../../RightSidebar';
import CustomScroll  from 'react-custom-scroll';

export default function RewardExercise({asAChild, dataUrl, timeEnd}) {

    const {state: { reward: { classes : { excercies }}}, dispatch} = useContext(AppContext);
    const [isTimeFinish, setFinishTime] = useState(false);
    let [selectedAnswer, setSelectedAnswer] = useState([]);
    const [enableQuestion, setEnableNextQuestion] = useState(new Set());
    const [stopTimer, setStopTimer] = useState(false);
    const [examStatus, setExamStatus] = useState(null);
    const [answerReview, setAnswerReview] = useState([]);

    const params = useParams();
    const history = useHistory();
    const match = useRouteMatch();
    

    const getExcercies = () => {
        return excercies[params.classId];
    }

    const handleSelectedAnswer = ({index, ...selection}) => {

        setEnableNextQuestion(prev => new Set([...prev, index+1]));

        if(!selectedAnswer.length) {
            setSelectedAnswer([...selectedAnswer, selection]);
            return;
        }

        let found = selectedAnswer.findIndex(item => item.question_id === selection.question_id);

        if(found >= 0) {
            selectedAnswer[found] = selection;
        } else {
            selectedAnswer = [...selectedAnswer, selection];
        }

        setSelectedAnswer([...selectedAnswer]);

    }

    const redo = () => {
        history.replace('/rewards', {'redirect': match.url});
    }

    const takeAnotherLession = () => {
        history.go(-2);
    }

    useEffect(() => {
        const url = dataUrl ? `/reward/classes/excercies/${dataUrl}.json` : `/reward/classes/excercies/${params.classId}.json`;

        if(!getExcercies()) {
            dispatch({
                type: TYPES.LOADING_REWARD_EXCERCIES
            });

            fetchData(url)
            .then(data => {
                dispatch({
                    type: TYPES.REWARD_EXCERCIES_LOADED,
                    payload: {
                        [params.classId]: data
                    }
                });
            })
            .catch(err => {
                console.log(err);
            })
        }

        if(timeEnd) {
            setFinishTime(true);
        }

    }, [timeEnd]);


    const onFinishTime = () => {
        setFinishTime(true);
    }

    const handleSubmitExcercies = () => {
        setStopTimer(true);
        const correctAnswer = [
            {question_id: 'frac-1', guess: 1},
            {question_id: 'frac-2', guess: 2},
            {question_id: 'frac-3', guess: 3},
            {question_id: 'frac-4', guess: 2},
        ];

        let checkedAns = selectedAnswer.map((item, index) => {
            if(item.question_id === correctAnswer[index].question_id && item.guess === correctAnswer[index].guess) {
                item.correct = true;
            } else {
                item.correct = false;
            }
            return item;
        });

        const givenAnswerLength =  checkedAns.filter(answer => answer.correct === true).length;
        if(givenAnswerLength >= (correctAnswer.length - 1)) {
            setExamStatus('pass')
            dispatch({
                type: TYPES.SHOW_CONFETTI,
                payload: {
                    show: true,
                    showTime: 10,
                    message: getExcercies().title
                }
            });

        } else {
            setExamStatus('fail');
        }

        setAnswerReview([...checkedAns]);
        setFinishTime(true);
    }


    const getAnswerResult = (id) => {
        const item = answerReview.filter(item => item.question_id === id);
        if(item) return item[0];
        return false;
    }

    return (
        <div className="container-fluid">
            <div className="row pt-4">
                <div className={asAChild ? 'col-md-12' : 'col-md-8'} >
                  
                    {/* <CustomScroll heightRelativeToParent="100%"> */}
                        {
                            (excercies.loading || getExcercies() === undefined) ? <Spinner /> :
                                (getExcercies() !== null) ? getExcercies().questions.map((item, indx) => (
                                    <MathQuestion 
                                    question={item} 
                                    key={item.id} 
                                    onSelect={handleSelectedAnswer} 
                                    isEnable={enableQuestion.has(indx) || indx === 0} 
                                    index={indx}
                                    result={examStatus ? getAnswerResult(item.id) : false} />
                                ))
                                : <div className="alert alert-warning text-center">No Excercies Found For This Subject.</div> 
                        }

                        {getExcercies() ?
                            <div className="form-group text-center">
                                {
                                    isTimeFinish ? (
                                    <>
                                        <button className="btn btn-info pl-5 pr-5 mr-4 btn-lg other" onClick={takeAnotherLession}>Other Classes</button>
                                        <button className="btn btn-info pl-5 pr-5" onClick={redo}>Redo Test</button>
                                    </>
                                    ) : (
                                    <button 
                                    className="btn btn-info pl-5 pr-5 btn-lg" 
                                    onClick={handleSubmitExcercies}
                                    disabled={getExcercies() && getExcercies().questions.length !== selectedAnswer.length}>
                                        Submit
                                    </button>
                                    )
                                }
                            </div> : null}

                    {/* </CustomScroll> */}
                </div>

                {/* if this component used inside another component then sidebar will be hidden   */}
                {!asAChild ? 
                    <div className="col-md-4">
                        <CountDown duration={getExcercies() ? getExcercies().duration : 0} onFinish={onFinishTime} stopTimer={stopTimer}/>
                        <RightSidebar />
                    </div>
                : null
                }
            </div>
        </div>
    );
};
