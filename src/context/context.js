import React, { createContext, useReducer, useEffect } from 'react';
import{ reducers, TYPES }from './reducers';
import { fetchData } from '../utils/dataClient';

//initial state
const initialState = {
    completed_subject: [],
    subjects: [],
    suplimentary: {
        loading: false,
        subjects: null,
        classes: {
            loading: false,
        }
    }
};

//context provider we will use for extract data from this
const AppContext = createContext({
    state: initialState,
    dispatch: () => null
});

//provider that will wrap app entry point
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducers, initialState);

    useEffect(() => {
        fetchData()
            .then(data => {
                dispatch({
                    type: TYPES.TASK_LOADED,
                    payload: [...data]
                });
            })
            .catch(er => console.log(er));
    }, []);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
}

export {AppProvider, AppContext};