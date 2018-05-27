import {TERM_CHANGE} from '../actions/constants';

const term = (state = '', action) => {
    switch (action.type) {
        case TERM_CHANGE:
            return action.term;
        default:
            return state;
    }
};

export default term;