import {RECEIVE_FILMS} from '../actions/constants';

const films = (state = 0, action) => {
    switch (action.type) {
        case RECEIVE_FILMS:
            return action.totalCount;
        default:
            return state;
    }
};

export default films;