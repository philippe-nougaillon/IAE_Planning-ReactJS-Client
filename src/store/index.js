import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import planningReducer from '../reducers/planning';
import rootSaga from '../sagas';

const logger = createLogger();

const saga = createSagaMiddleware();

const store = createStore (
    planningReducer,
    applyMiddleware(saga, logger),
);

saga.run(rootSaga);

export default store;