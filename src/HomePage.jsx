import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchHeader from './SearchHeader';
import FilmList from './FilmList';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalCount: 0,
            films: []
        };
    }
    
    handleSearch = (searchRequest) => {
        this.setState({
            totalCount: 7,
            films: [
            ]
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