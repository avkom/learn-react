export default class ApiClient {
    getFilms(request) {
        const url = this.buildUrl('http://react-cdp-api.herokuapp.com/movies', request);
        return window.fetch(url).then(response => response.json());
    }

    getFilmById(id) {
        const url = 'http://react-cdp-api.herokuapp.com/movies/' + id;
        return window.fetch(url).then(response => response.json());
    }

    buildUrl(baseUrl, params) {
        return baseUrl + '?' + Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
    }
}