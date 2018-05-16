import React from 'react';
import Toggle from './Toggle';

export default class SearchHeader extends React.Component {
    render() {
        return (
            <div>
                <div>Find your moovie</div>
                <input type='text' />
                <div>
                    <span>Search by</span>
                    <Toggle />
                    <button type='button'>Search</button>
                </div>
                <div>
                    <span>7 movies found</span>
                    <div>
                        <span>Sort by</span>
                        <Toggle />
                    </div>
                </div>
            </div>
        );
    }
}