import { FILTER_SET } from '../constants/actionTypes';

function filterReducer(state = '', action) {
    switch(action.type) {
        case FILTER_SET : {
            return applySetFilter(state, action);
        }
        default : return state;
    }
}

function applySetFilter(state, action) {
    return action.filter;
}

export default filterReducer;