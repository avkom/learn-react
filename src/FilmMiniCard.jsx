import React from 'react';

export default class FilmMiniCard extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.poster_path} alt={this.props.title} />
                <div>{this.props.title}</div>
                <div>{new Date(this.props.release_date).getFullYear()}</div>
                <div>{this.props.genres.join(', ')}</div>
            </div>
        );
    }
}