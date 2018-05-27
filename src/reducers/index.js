import {combineReducers} from 'redux';
import film from './film';
import films from './films';
import searchBy from './searchBy';
import sortBy from './sortBy';
import term from './term';
import totalCount from './totalCount';

export default combineReducers({
    film,
    films,
    searchBy,
    sortBy,
    term,
    totalCount
});