import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchHeader from '../components/SearchHeader';
import FilmList from '../components/FilmList';
import ApiClient from '../services/ApiClient';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalCount: 0,
            films: []
        };

        this.apiClient = new ApiClient();
    }
    
    handleSearch = searchRequest => {
        this.apiClient.getFilms(searchRequest).then(this.setStateUsingSearchResponse);
    }

    setStateUsingSearchResponse = result => {
        this.setState({
            totalCount: result.total,
            films: result.data
        });
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

export default connect()(HomePage);