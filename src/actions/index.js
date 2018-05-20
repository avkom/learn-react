import ApiClient from '../services/ApiClient';

export const REQUEST_FILMS = 'REQUEST_FILMS';
export const RECEIVE_FILMS = 'RECEIVE_FILMS';

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