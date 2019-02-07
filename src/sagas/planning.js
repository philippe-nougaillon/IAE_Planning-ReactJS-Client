import { call, put } from 'redux-saga/effects';
import { doAddPlanning, doFetchErrorPlanning} from '../actions/planning';
import { fetchPlanning } from '../api/planning';


function* handleFetchPlanning(action) {
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