import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import planningReducer from '../reducers/planning';
import filterReducer from '../reducers/filter';

import rootSaga from '../sagas';

import thunk from 'redux-thunk';

const logger = createLogger();

const saga = createSagaMiddleware();

const rootReducer = combineReducers({
    planningState: planningReducer,
    filterState: filterReducer,
});

const store = createStore (
    rootReducer,
    applyMiddleware(thunk, saga, logger),
);

saga.run(rootSaga);

export default store;