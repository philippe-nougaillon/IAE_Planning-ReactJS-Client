import { PLANNING_ADD } from '../constants/actionTypes';

const INITIAL_STATE = [];

const applyAddPlanning = (state, action) =>
    action.planning;

function planningReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case PLANNING_ADD : {
            return applyAddPlanning(state, action)
        }
        default : return state;
    }
}

export default planningReducer;