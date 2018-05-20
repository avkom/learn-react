import React from 'react';
import {connect} from 'react-redux';
import {requestFilmById} from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilmDetails from '../components/FilmDetails';
import FilmList from '../components/FilmList';

class FilmDetailsPage extends React.Component {
    componentDidMount() {
        this.props.onInitialize('680');
    }

    render() {
        return (
            <div>
                <Header />
                <a href='javascript:void(0)'>Search</a>
                {this.props.film && <FilmDetails {...this.props.film}/>}
                {this.props.films && <hr />}
                {this.props.film && this.props.films && <div>Films by {this.props.film.genres[0]} genre</div>}
                {this.props.films && <FilmList items={this.props.films}/>}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    film: state.film,
    films: state.films
});

const mapDispatchToProps = dispatch => ({
    onInitialize: id => dispatch(requestFilmById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetailsPage);