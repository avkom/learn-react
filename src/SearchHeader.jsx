import React from 'react';
import Toggle from './Toggle';

export default class SearchHeader extends React.Component {
    searchByItems = [
        {value: 'title', label: 'Title'},
        {value: 'genres', label:'Genre'}
    ];

    sortByItems = [
        {value: 'release_date', label: 'release date'},
        {value: 'vote_average', label:'rating'}
    ];
    
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            searchBy: 'title',
            sortBy: 'vote_average'
        };
    }

    handleTermChange = (event) => {
        this.setState({term: event.target.value});
    }
    
    handleSearchByChange = (value) => {
        this.setState({searchBy: value});
    }

    handleSortByChange = (value) => {
        this.setState({sortBy: value});
    }

    handleSearchClick = () => {
        let searchRequest = {
            search: this.state.term,
            searchBy: this.state.searchBy,
            sortBy: this.state.sortBy
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
                    <Toggle value={this.state.searchBy} items={this.searchByItems} onChange={this.handleSearchByChange} />
                    <button type='button' onClick={this.handleSearchClick}>Search</button>
                </div>
                {this.state.resultCount && (
                        <div>
                            <span>{this.props.resultCount} movies found</span>
                            <div>
                                <span>Sort by</span>
                                <Toggle value={this.state.sortBy} items={this.sortByItems} onChange={this.handleSortByChange} />
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}