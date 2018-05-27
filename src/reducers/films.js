import {RECEIVE_FILMS} from '../actions/constants';

const films = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_FILMS:
            return action.films;
        default:
            return state;
    }
};

export default films;