import { takeEvery, all } from 'redux-saga/effects';
import { PLANNING_FETCH } from '../constants/actionTypes';
import { handleFetchPlanning } from './planning';

function* watchAll() {
    yield all([
        takeEvery(PLANNING_FETCH, handleFetchPlanning),
    ])
}

export default watchAll;
