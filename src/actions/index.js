import {RECEIVE_FILMS, RECEIVE_FILM_BY_ID} from './constants';
import ApiClient from '../services/ApiClient';

export function requestFilms(searchRequest) {
    return function(dispatch) {
        return ApiClient.getFilms(searchRequest).then(json => 
            dispatch(receiveFilms(json)));
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