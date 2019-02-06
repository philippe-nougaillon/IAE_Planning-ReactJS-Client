import { PLANNING_ADD, PLANNING_LOADING, PLANNING_FETCH_ERROR } from '../constants/actionTypes';

const INITIAL_STATE = {
    planning: [],
    loading: false,
    error: null,
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
    error: null,
});



const applyFetchErrorPlanning = (state, action) => ({
    planning: [],
    error: action.error,
})

export default planningReducer;