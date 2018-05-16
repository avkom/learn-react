import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchHeader from './SearchHeader';
import FilmList from './FilmList';
import ApiClient from './ApiClient';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalCount: 0,
            films: []
        };

        this.apiClient = new ApiClient();
    }
    
    handleSearch = (searchRequest) => {
        this.apiClient.getFilms(searchRequest)
            .then(result =>
                this.setState({
                    totalCount: result.total,
                    films: result.data
                })
            );
    }

    render() {
        return (
            <div>
                <Header />
                <SearchHeader totalCount={this.state.totalCount} onSearch={this.handleSearch}/>
                <FilmList items={this.state.films}/>
                <Footer />
            </div>
        );
    }
}