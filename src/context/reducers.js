export const  TYPES = {
    SUBJECT_DONE: 'SUBJECT_DONE',
    LOAD_SUBJECT: 'LOAD_SUBJECT',
};


export const  reducers = (state={}, action) => {
    switch (action.type) {
        case TYPES.SUBJECT_DONE:
            const index = state.completed_subject.findIndex(({name, id}) => action.payload.name === name);
            //completed subject exist or add to complete
            if(index >= 0) {
                let completed_subject = state.completed_subject;
                let selected = completed_subject[index];
                
                selected = {...selected, ...action.payload};
                completed_subject[index] = selected;
                
                return {...state, completed_subject: [...completed_subject]};
            }

            const completed_subject = [...state.completed_subject];
            completed_subject.push(action.payload);
            return {
                ...state,
                completed_subject: [...completed_subject]
            };
        
        case TYPES.LOAD_SUBJECT:
            return {
                ...state,
                subjects: [...action.payload]
            }
        default:
            return state;
    }
}