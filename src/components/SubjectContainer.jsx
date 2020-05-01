import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/context';
import TaskCard from './TaskCard';
import Component from '../utils/Components';

export default function SubjectContainer(params) {
    const [selectedSubject, setSelectedSubject] = useState(undefined);
    const {state:{subjects}} = useContext(AppContext);
    const { name } = useParams();

    useEffect(() => {
        let index = subjects.findIndex(item => item.title === name);
        setSelectedSubject(prev => (index >= 0 ? subjects[index] : null));
    }, [subjects, name]);

    return (
        <div className="row">
            <div className="col-md-4">
                {subjects.map(item => (<TaskCard {...item}  column='col-md-12' key={item.id} />))}
            </div>
            <div className="col-md-8">
                {selectedSubject ? <Component name={name.toLowerCase()} subject={selectedSubject} /> : <h3>Component not ready</h3>}
            </div>
        </div>
    )
};
