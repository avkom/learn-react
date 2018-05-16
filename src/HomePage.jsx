import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchHeader from './SearchHeader';
import FilmList from './FilmList';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleSearch = (searchRequest) => {
        console.dir(searchRequest);
    }
    
    render() {
        return (
            <div>
                <Header />
                <SearchHeader onSearch={this.handleSearch}/>
                <FilmList items={[]}/>
                <Footer />
            </div>
        );
    }
}