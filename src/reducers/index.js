import {combineReducers} from 'redux';
import film from './film';
import films from './films';
import totalCount from './totalCount';

export default combineReducers({
    film,
    films,
    totalCount
});