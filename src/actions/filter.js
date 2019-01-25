import { 
    FILTER_SET,
} from '../constants/actionTypes';

const doSetFilter = filter => ({
    type: FILTER_SET,
    filter,
});

export { 
    doSetFilter, 
};
