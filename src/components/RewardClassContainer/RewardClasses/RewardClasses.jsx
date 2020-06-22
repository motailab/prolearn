import React, { useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import RewardTask from './RewardTask/RewardTask';
import { AppContext } from '../../../context/context';
import  TYPES  from '../../../context/actionTypes';
import { fetchData } from '../../../utils/dataClient';
import Spinner from '../../Spinner/Spinner';

export default function RewardClasses(props) {
    const {state: { reward: { classes }}, dispatch} = useContext(AppContext);
    const params = useParams();
    const history = useHistory();

    const goBack = () => history.goBack();
    const { subject_name } = history.location.state;

    const hasData = () => {
        return classes[params.id];
    }

    useEffect(() => {
        if(!hasData()) {
            
            dispatch({
                type: TYPES.LOADING_REWARD_CLASS
            });

            fetchData(`/reward/classes/${params.id}.json`)
            .then(data => {
                dispatch({
                    type: TYPES.REWARD_CLASS_LOADED,
                    payload: {
                        [params.id]: data
                    }
                });

            })
            .catch(err => {
                console.log(err);
            })
        }
        
    }, []);

    return (
        <div className="container-fluid">
            <div className="row" style={{marginTop: '100px'}}>
                <div className="col-md-12">
                    <strong style={{cursor: 'pointer'}} className="d-block mb-4" onClick={goBack}><i className="fas fa-angle-left" aria-hidden="true"></i> {subject_name}</strong>
                    <h2>Suplimentary Classes</h2>
                    <p>These supplementary classes will help you to learn, understand and practice topics that you need more help in.</p>

                    <div className="row">
                        {
                            classes.loading || hasData() === undefined ? <Spinner /> 
                            : hasData() ? 
                            hasData().map(item => (
                                <RewardTask taskInfo={item} key={item.id}/>
                            ))
                            : <div className="alert alert-warning text-center">Not Found Any Reward class for this subject</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
