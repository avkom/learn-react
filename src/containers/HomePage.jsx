import React from 'react';
import {connect} from 'react-redux';
import {requestFilms} from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchHeader from '../components/SearchHeader';
import FilmList from '../components/FilmList';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SearchHeader totalCount={this.props.totalCount} onSearch={this.props.onSearch}/>
                <FilmList items={this.props.films}/>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    films: state.films,
    totalCount: state.totalCount
});

const mapDispatchToProps = (dispatch) => ({
    onSearch: searchRequest => dispatch(requestFilms(searchRequest))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);