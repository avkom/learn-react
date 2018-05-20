export default {
    getFilms: function(request) {
        const url = this.buildUrl('http://react-cdp-api.herokuapp.com/movies', request);
        return window.fetch(url).then(response => response.json());
    },

    getFilmById: function(id) {
        const url = 'http://react-cdp-api.herokuapp.com/movies/' + id;
        return window.fetch(url).then(response => response.json());
    },

    buildUrl: function(baseUrl, params) {
        return baseUrl + '?' + Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
    }
}