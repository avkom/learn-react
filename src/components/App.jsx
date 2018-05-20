import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import HomePage from '../containers/HomePage';
import FilmDetailsPage from '../containers/FilmDetailsPage';

export default class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <FilmDetailsPage />
                {/* <FilmDetailsPage /> */}
            </ErrorBoundary>
        );
    }
}