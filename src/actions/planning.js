import { 
    PLANNING_ADD, 
    PLANNING_LOADING,
    PLANNING_FETCH,
    PLANNING_FETCH_ERROR,
} from '../constants/actionTypes';

const doAddPlanning = planning => ({
    type: PLANNING_ADD,
    planning,
});

const doLoadingPlanning = ({
    type: PLANNING_LOADING,
});

const doFetchPlanning = query => ({
    type: PLANNING_FETCH,
    query,
});

const doFetchErrorPlanning = error => ({
    type: PLANNING_FETCH_ERROR,
    error,
});

export { 
    doAddPlanning, 
    doLoadingPlanning,
    doFetchPlanning,
    doFetchErrorPlanning, 
};