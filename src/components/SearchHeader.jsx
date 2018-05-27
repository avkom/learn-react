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
    
    termRef = React.createRef();

    handleTermKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleSearchClick();
        }
    }
    
    handleSearchByChange = (value) => {
        this.props.onSearchByChange(value);
    }

    handleSortByChange = (value) => {
        this.props.onSortByChange(value);
    }

    handleSearchClick = () => {
        this.props.onSearch(this.termRef.current.value);
    }

    render() {
        return (
            <div>
                <div>Find your movie</div>
                <input type='text' defaultValue={this.props.term} ref={this.termRef} onKeyPress={this.handleTermKeyPress}/>
                <div>
                    <span>Search by</span>
                    <Toggle value={this.props.searchBy} items={this.searchByItems} onChange={this.handleSearchByChange} />
                    <button type='button' onClick={this.handleSearchClick}>Search</button>
                </div>
                {this.props.totalCount > 0 && (
                        <div>
                            <span>{this.props.totalCount} movies found</span>
                            <div>
                                <span>Sort by</span>
                                <Toggle value={this.props.sortBy} items={this.sortByItems} onChange={this.handleSortByChange} />
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}