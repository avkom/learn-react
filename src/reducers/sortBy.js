import {SORT_BY_CHANGE} from '../actions/constants';

const sortBy = (state = 'vote_average', action) => {
    switch (action.type) {
        case SORT_BY_CHANGE:
            return action.sortBy;
        default:
            return state;
    }
};

export default sortBy;