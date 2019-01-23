import { createStore } from 'redux';
import planningReducer from '../reducers/planning';

const store = createStore (
    planningReducer
);

export default store;