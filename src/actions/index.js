import ApiClient from '../services/ApiClient';

export const REQUEST_FILMS = 'REQUEST_FILMS';
export const RECEIVE_FILMS = 'RECEIVE_FILMS';
export const REQUEST_FILM_BY_ID = 'REQUEST_FILM_BY_ID';
export const RECEIVE_FILM_BY_ID = 'RECEIVE_FILM_BY_ID';

export function requestFilms(searchRequest) {
    return function(dispatch) {
        return new ApiClient().getFilms(searchRequest).then(json => 
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
        return new ApiClient().getFilmById(id).then(json => {
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