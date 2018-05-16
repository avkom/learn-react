import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import HomePage from './HomePage'

export default class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <HomePage />
            </ErrorBoundary>
        );
    }
}