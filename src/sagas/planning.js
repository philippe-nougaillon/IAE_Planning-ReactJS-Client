import { call, put } from 'redux-saga/effects';
import { doAddPlanning, doFetchErrorPlanning } from '../actions/planning';

const BASE_URL = 'https://iae-test.philnoug.com/api/v2/cours.json?d=';

const fetchPlanning = query => 
    fetch(BASE_URL + query)
        .then(response => response.json());

function *handleFetchPlanning(action) {
    const { query } = action;

    try {
        const result = yield call(fetchPlanning, query);
        yield put(doAddPlanning(result));
    } catch (error) {
        yield put(doFetchErrorPlanning(error));
    }
}

export {
    handleFetchPlanning,
};