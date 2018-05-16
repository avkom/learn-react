import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import HomePage from './HomePage';
import FilmDetailsPage from './FilmDetailsPage';

export default class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <HomePage />
            </ErrorBoundary>
        );
    }
}