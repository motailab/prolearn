export const  TYPES = {
    TASK_DONE: 'TASK_DONE',
    TASK_LOADED: 'TASK_LOADED',
    LOAD_REWARD_SUBJECT: 'LOAD_REWARD_SUBJECT',
    REWARD_SUBJECT_LOADED: 'REWARD_SUBJECT_LOADED',
    LOADING_REWARD_CLASS: 'LOADING_REWARD_CLASS',
    REWARD_CLASS_LOADED: 'REWARD_CLASS_LOADED',
    LOADING_REWARD_EXCERCIES: 'LOADING_REWARD_EXCERCIES',
    REWARD_EXCERCIES_LOADED: 'REWARD_EXCERCIES_LOADED',
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

        case TYPES.LOAD_REWARD_SUBJECT:
            return {
                ...state,
                reward: {
                    ...state.reward,
                    loading: true,
                    subjects: null
                }
            };

        case TYPES.REWARD_SUBJECT_LOADED:
            return {
                ...state,
                reward: {
                    ...state.reward,
                    loading: false,
                    subjects: action.payload
                }
            };
        
        case TYPES.LOADING_REWARD_CLASS:
            return {
                ...state,
                reward:{
                    ...state.reward,
                    classes: {
                        ...state.reward.classes,
                        loading: true
                    }
                }
            };

        case TYPES.REWARD_CLASS_LOADED:
            return {
                ...state,
                reward: {
                    ...state.reward,
                    classes: {
                        ...state.reward.classes,
                        ...action.payload,
                        loading: false
                    }
                }
            }

        case TYPES.LOADING_REWARD_EXCERCIES:
            return {
                ...state,
                reward: {
                    ...state.reward,
                    classes: {
                        ...state.reward.classes,
                        excercies: {
                            ...state.reward.classes.excercies,
                            loading: true
                        }
                    }
                }
            };
        
        case TYPES.REWARD_EXCERCIES_LOADED:
            return {
                ...state,
                reward: {
                    ...state.reward,
                    classes: {
                        ...state.reward.classes,
                        excercies: {
                            ...state.reward.classes.excercies,
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