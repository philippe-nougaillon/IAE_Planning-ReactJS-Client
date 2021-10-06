import { 
    PLANNING_ADD, 
    PLANNING_LOADING, 
    PLANNING_FETCH_ERROR
} from '../constants/actionTypes';

const INITIAL_STATE = {
    planning: [],
    size: 0,
    loading: false,
    error: null,
    page: 0,
};

function planningReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case PLANNING_ADD : {
            return applyAddPlanning(state, action);
        }
        case PLANNING_LOADING : {
            return { ...state, loading: true }
        }
        case PLANNING_FETCH_ERROR: {
            return applyFetchErrorPlanning(state, action);
        }
        default : return state;
    }
}

const applyAddPlanning = (state, action) => ({
    planning: action.planning,
    size: action.planning.length,
    page: action.page,
    error: null,
});

const applyFetchErrorPlanning = (state, action) => ({
    planning: [],
    error: action.error,
})

export default planningReducer;