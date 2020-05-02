import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../context/context';
import { TYPES } from '../context/reducers';

export default function Literature({subject}) {
    const [answer, setAnswer] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(null);
    const {state, dispatch} = useContext(AppContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(answer.length < 20) {
            setError('answer should be greater than 20 character');
            return;
        }

        dispatch({
            type: TYPES.SUBJECT_DONE,
            payload: {
                done: true,
                name: subject.title,
                id: subject.id,
                pass: true
            }
        });

        setRedirect(true);
    }

    const handleChange = (e) => {
        setAnswer(e.target.value);
        setError(null);
    }

    useEffect(() => {
        const item = state.completed_subject.filter(item => item.id === subject.id);

        if(item.length && item[0].done) {
            dispatch({
                type: TYPES.SUBJECT_DONE,
                payload: {
                    done: false,
                    name: subject.title,
                    id: subject.id
                }
            });
        }
        
    }, [subject]);

    return (
        <div className='literature p-4'>
            {redirect ? <Redirect to="/" /> : null}
            <h4 className="title">Literature</h4>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <textarea style={{width: '100%', fontSize:'12px', height: '400px'}} className="form-control rounded" name='answer' onChange={handleChange} value={answer} placeholder="Harper Lee’s was an American novelist widely known for To Kill a Mockingbird, published in 1960. Immediately
successful" ></textarea>
                    {error && <div className='alert alert-danger mt-2' style={{fontSize:'12px'}}>{error}</div>}
                </div>
                <div className="form-group text-right">
                    <button className="btn btn-info pl-5 pr-5" onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
};
