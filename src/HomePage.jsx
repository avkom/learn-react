import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchHeader from './SearchHeader';
import FilmList from './FilmList';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SearchHeader />
                <FilmList />
                <Footer />
            </div>
        );
    }
}