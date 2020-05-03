import React, { useEffect, useContext } from 'react';
import CustomScroll from 'react-custom-scroll';

import { AppContext } from '../../context/context';
import { TYPES } from '../../context/reducers';

import { fetchData } from '../../utils/dataClient';
import Spinner from '../Spinner/Spinner';
import SuplimentarySubject from './SuplimentarySubject/SuplimentarySubject';
import RightSidebar from '../RightSidebar';


export default function SuplimentaryClassContainer(props) {

    const {state:{suplimentary: {subjects, loading}}, dispatch} = useContext(AppContext);

    useEffect(() => {

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
