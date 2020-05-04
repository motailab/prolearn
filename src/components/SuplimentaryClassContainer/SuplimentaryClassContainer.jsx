import React, { useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import CustomScroll from 'react-custom-scroll';

import { AppContext } from '../../context/context';
import { TYPES } from '../../context/reducers';

import { fetchData } from '../../utils/dataClient';
import Spinner from '../Spinner/Spinner';
import SuplimentarySubject from './SuplimentarySubject/SuplimentarySubject';
import RightSidebar from '../RightSidebar';


export default function SuplimentaryClassContainer(props) {
    const location = useLocation();
    const history = useHistory();
    const {state:{suplimentary: {subjects, loading}}, dispatch} = useContext(AppContext);

    useEffect(() => {
       
        if(location.state && location.state.goForward) {
            history.replace(location.state.goForward);
        }

        if(!subjects) {
            fetchData('/suplimentary.json')
            .then(data => {
                dispatch({
                    type: TYPES.SUPLIMENTARY_SUBJECT_LOADED,
                    payload: data.subjects
                });
            })
            .catch(err => {
                console.log(err);
            })

        }

    }, [ subjects, dispatch]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 overViweWrap">
                    <CustomScroll heightRelativeToParent="100%">
                        <div className="row">
                           {loading || !subjects ? <Spinner /> : subjects.map(item => (<SuplimentarySubject score={item.previous_score} {...item} key={item.id} />))}
                        </div>
                    </CustomScroll>
                </div>
               <div className="col-md-4">
                    <RightSidebar />
               </div>
            </div>
        </div>
    )
};
