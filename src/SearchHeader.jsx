import React from 'react';
import Toggle from './Toggle';

export default class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    handleTermChange = (event) => {
        this.setState({term: event.target.value});
    }
    
    handleSearchClick = () => {
        let searchRequest = {
            search: this.state.term
        };

        this.props.onSearch(searchRequest);
    }

    render() {
        return (
            <div>
                <div>Find your moovie</div>
                <input type='text' value={this.state.term} onChange={this.handleTermChange} />
                <div>
                    <span>Search by</span>
                    <Toggle />
                    <button type='button' onClick={this.handleSearchClick}>Search</button>
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