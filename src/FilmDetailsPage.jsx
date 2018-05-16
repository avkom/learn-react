import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FilmDetails from './FilmDetails';
import FilmList from './FilmList';
import ApiClient from './ApiClient';

export default class FilmDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            film: null,
            filmsByGenre: null
        };

        this.apiClient = new ApiClient();
    }
    
    componentDidMount() {
        this.apiClient.getFilmById('412302').then(this.setFilm);
    }

    setFilm = response =>
    {
        this.setState({film: response});
        this.loadFilmsByGenre(response);
    }

    loadFilmsByGenre = film => {
        this.apiClient.getFilms({searchBy: 'genres', search: film.genres[0]}).then(this.setFilmsByGenre);
    }

    setFilmsByGenre = response => {
        this.setState({filmsByGenre: response.data});
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.film && <FilmDetails {...this.state.film}/>}
                {this.state.filmsByGenre && <div>Films by {this.state.film.genres[0]} genre</div>}
                {this.state.filmsByGenre && <FilmList items={this.state.filmsByGenre}/>}
                <Footer />
            </div>
        );
    }
}