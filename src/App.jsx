import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export default class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <h1>Hello, React!</h1>
            </ErrorBoundary>
        );
    }
}