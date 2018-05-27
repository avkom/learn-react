import React from 'react';
import {connect} from 'react-redux';
import {requestFilms, searchByChange, sortByChange} from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchHeader from '../components/SearchHeader';
import FilmList from '../components/FilmList';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SearchHeader
                    searchBy={this.props.searchBy}
                    sortBy={this.props.sortBy}
                    term={this.props.term}
                    totalCount={this.props.totalCount}
                    onSearch={this.props.onSearch}
                    onSearchByChange={this.props.onSearchByChange}
                    onSortByChange={this.props.onSortByChange}
                />
                <FilmList items={this.props.films}/>
                <Footer />
            </div>
        );
    }
}

const compareBy = function (property) {
    return function (a, b) {
        return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
    };
};

const mapStateToProps = (state) => ({
    films: state.films.sort(compareBy(state.sortBy)),
    searchBy: state.searchBy,
    sortBy: state.sortBy,
    term: state.term,
    totalCount: state.totalCount
});

const mapDispatchToProps = (dispatch) => ({
    onSearch: term => dispatch(requestFilms(term)),
    onSearchByChange: searchBy => dispatch(searchByChange(searchBy)),
    onSortByChange: sortBy => dispatch(sortByChange(sortBy)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);