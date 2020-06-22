import TYPES from './actionTypes';

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
        
        case TYPES.LOADING_TASK_HISTORY:
            return {
                ...state,
                task_history: {
                    ...state.task_history,
                    loading: true
                }
            };
        
        case TYPES.LOADED_TASK_HISTORY:
            return {
                ...state,
                task_history: {
                    ...state.task_history,
                    tasks: action.payload,
                    loading: false
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
        case TYPES.LOADED_SUMMARY:
            return {
                ...state,
                home: {
                    ...state.home,
                    summary: {...action.payload}
                }
            }
        default:
            return state;
    }
}