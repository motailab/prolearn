export const  TYPES = {
    TASK_DONE: 'TASK_DONE',
    TASK_LOADED: 'TASK_LOADED',
    LOAD_SUPLIMENTARY_SUBJECT: 'LOAD_SUPLIMENTARY_SUBJECT',
    SUPLIMENTARY_SUBJECT_LOADED: 'SUPLIMENTARY_SUBJECT_LOADED',
    LOADING_SUPLIMENTARY_CLASS: 'LOADING_SUPLIMENTARY_CLASS',
    SUPLIMENTARY_CLASS_LOADED: 'SUPLIMENTARY_CLASS_LOADED',
    LOADING_SUPLIMENTARY_EXCERCIES: 'LOADING_SUPLIMENTARY_EXCERCIES',
    SUPLIMENTARY_EXCERCIES_LOADED: 'SUPLIMENTARY_EXCERCIES_LOADED',
    SHOW_CONFETTI: 'SHOW_CONFETTI',
    HIDE_CONFETTI: 'HIDE_CONFETTI'
};


export const  reducers = (state={}, action) => {
    switch (action.type) {

        case TYPES.TASK_DONE:
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
        
        case TYPES.TASK_LOADED:
            return {
                ...state,
                subjects: [...action.payload]
            }

        case TYPES.LOAD_SUPLIMENTARY_SUBJECT:
            return {
                ...state,
                suplimentary: {
                    ...state.suplimentary,
                    loading: true,
                    subjects: null
                }
            };

        case TYPES.SUPLIMENTARY_SUBJECT_LOADED:
            return {
                ...state,
                suplimentary: {
                    ...state.suplimentary,
                    loading: false,
                    subjects: action.payload
                }
            };
        
        case TYPES.LOADING_SUPLIMENTARY_CLASS:
            return {
                ...state,
                suplimentary: {
                    ...state.suplimentary,
                    classes: {
                        ...state.suplimentary.classes,
                        loading: true
                    }
                }
            };

        case TYPES.SUPLIMENTARY_CLASS_LOADED:
            return {
                ...state,
                suplimentary: {
                    ...state.suplimentary,
                    classes: {
                        ...state.suplimentary.classes,
                        ...action.payload,
                        loading: false
                    }
                }
            }

        case TYPES.LOADING_SUPLIMENTARY_EXCERCIES:
            return {
                ...state,
                suplimentary: {
                    ...state.suplimentary,
                    classes: {
                        ...state.suplimentary.classes,
                        excercies: {
                            ...state.suplimentary.classes.excercies,
                            loading: true
                        }
                    }
                }
            };
        
        case TYPES.SUPLIMENTARY_EXCERCIES_LOADED:
            return {
                ...state,
                suplimentary: {
                    ...state.suplimentary,
                    classes: {
                        ...state.suplimentary.classes,
                        excercies: {
                            ...state.suplimentary.classes.excercies,
                            loading: false,
                            ...action.payload
                        }
                    }
                }
            };

        case TYPES.SHOW_CONFETTI:
            return {
                ...state,
                confetti: {
                    ...state.confetti,
                    ...action.payload,
                    show: true
                }
            };
        case TYPES.HIDE_CONFETTI:
            return {
                ...state,
                confetti: {
                    ...state.confetti,
                    showTime: 15,
                    message: '',
                    show: false
                }
            }
        default:
            return state;
    }
}