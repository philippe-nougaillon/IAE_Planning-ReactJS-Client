import { 
    PLANNING_ADD, 
    PLANNING_FETCH 
} from '../constants/actionTypes';

const doAddPlanning = planning => ({
    type: PLANNING_ADD,
    planning,
});

const doFetchPlanning = query => ({
    type: PLANNING_FETCH,
    query,
});

export { 
    doAddPlanning, 
    doFetchPlanning, 
};