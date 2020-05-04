import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';
import { AppContext } from '../../../context/context';
import { TYPES } from '../../../context/reducers';
import { fetchData } from '../../../utils/dataClient';
import Spinner from '../../Spinner/Spinner';
import MathQuestion from './MathQuestion/MathQuestion';
import Timer from '../../Timer/Timer';
import RightSidebar from '../../RightSidebar';
import CustomScroll  from 'react-custom-scroll';

export default function SuplimentaryExercise(props) {
    const {state: { suplimentary: { classes : { excercies }}}, dispatch} = useContext(AppContext);
    const [isTimeFinish, setFinishTime] = useState(false);

    const params = useParams();
    const history = useHistory();
    const match = useRouteMatch();

    const getExcercies = () => {
        return excercies[params.classId];
    }

    const handleSelectedAnswer = (selection) => {
        console.log(selection);
    }

    const redo = () => {
        history.replace('/suplimentary', {'goForward': match.url});
    }

    const takeAnotherLession = () => {
        history.go(-2);
    }

    useEffect(() => {
        const url = `/suplimentary/classes/excercies/${params.classId}.json`;
        if(!getExcercies()) {

            dispatch({
                type: TYPES.LOADING_SUPLIMENTARY_EXCERCIES
            });

            fetchData(url)
            .then(data => {
                dispatch({
                    type: TYPES.SUPLIMENTARY_EXCERCIES_LOADED,
                    payload: {
                        [params.classId]: data
                    }
                });
            })
            .catch(err => {
                console.log(err);
            })
        }

    }, []);

    const onTimeOut = () => {
        setFinishTime(true);
    }

    return (
        <div className="container-fluid">
            <div className="row step-down">
                <div className="col-md-8">
                    <CustomScroll heightRelativeToParent="100%">
                        {
                            (excercies.loading || getExcercies() === undefined) ? <Spinner /> :
                                (getExcercies() !== null) ? getExcercies().questions.map(item => (
                                    <MathQuestion question={item} key={item.id} onSelect={handleSelectedAnswer} />
                                ))
                                : <div className="alert alert-warning text-center">No Excercies Found For This Subject.</div> 
                        }

                        {getExcercies() ?
                        <div className="form-group text-center">
                            {
                                isTimeFinish ? (
                                   <>
                                    <button className="btn btn-info pl-5 pr-5 mr-4" onClick={takeAnotherLession}>Other Classes</button>
                                    <button className="btn btn-info pl-5 pr-5" onClick={redo}>Redo Test</button>
                                   </>
                                ) : <button className="btn btn-info pl-5 pr-5">Submit</button>
                            }
                        </div> : null}

                    </CustomScroll>
                </div>
                <div className="col-md-4">
                    <Timer duration={getExcercies() ? getExcercies().duration : 0} onFinish={onTimeOut}/>
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
};
