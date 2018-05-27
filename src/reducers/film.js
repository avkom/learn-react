import {RECEIVE_FILM_BY_ID} from '../actions/constants';

const films = (state = null, action) => {
    switch (action.type) {
        case RECEIVE_FILM_BY_ID:
            return action.film;
        default:
            return state;
    }
};

export default films;