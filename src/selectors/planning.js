const getReadablePlanning = ({ planningState }) => 
    planningState.planning;

const getFetchError = ({ planningState }) =>
    planningState.error;

export {
    getReadablePlanning,
    getFetchError,
};