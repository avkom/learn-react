import {SEARCH_BY_CHANGE} from '../actions/constants';

const searchBy = (state = 'title', action) => {
    switch (action.type) {
        case SEARCH_BY_CHANGE:
            return action.searchBy;
        default:
            return state;
    }
};

export default searchBy;