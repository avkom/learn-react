import {RECEIVE_FILMS, RECEIVE_FILM_BY_ID, SEARCH_BY_CHANGE, SORT_BY_CHANGE, TERM_CHANGE} from './constants';
import ApiClient from '../services/ApiClient';

export function requestFilms(term) {
    return function(dispatch, getState) {
        dispatch(termChange(term));

        let state = getState();
        let searchRequest = {
            search: state.term,
            searchBy: state.searchBy
        };
        return ApiClient.getFilms(searchRequest).then(json => 
            dispatch(receiveFilms(json)));
    };
}

export function termChange(term) {
    return {
        type: TERM_CHANGE,
        term: term
    };
}

export function searchByChange(searchBy) {
    return {
        type: SEARCH_BY_CHANGE,
        searchBy: searchBy
    };
}

export function sortByChange(sortBy) {
    return {
        type: SORT_BY_CHANGE,
        sortBy: sortBy
    };
}

export function receiveFilms(json) {
    return {
        type: RECEIVE_FILMS,
        totalCount: json.total,
        films: json.data
    };
}

export function requestFilmById(id) {
    return function(dispatch) {
        return ApiClient.getFilmById(id).then(json => {
            dispatch(receiveFilmById(json));
            dispatch(requestFilms({searchBy: 'genres', search: json.genres[0]}));
        });
    };
}

export function receiveFilmById(json) {
    return {
        type: RECEIVE_FILM_BY_ID,
        film: json
    };
}