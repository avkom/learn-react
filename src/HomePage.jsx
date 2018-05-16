import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}