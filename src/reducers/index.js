import {combineReducers} from 'redux';
import films from './films';
import totalCount from './totalCount';

export default combineReducers({
    films,
    totalCount
});