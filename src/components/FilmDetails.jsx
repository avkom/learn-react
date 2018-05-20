import React from 'react';

export default class FilmDetails extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.poster_path} alt={this.props.title} />
                <div>{this.props.title}</div>
                <div>{this.props.tagline}</div>
                <div>{this.props.vote_average}</div>
                <div>{new Date(this.props.release_date).getFullYear()}</div>
                <div>{this.props.overview}</div>
                <div>{this.props.genres.join(', ')}</div>
            </div>
        );
    }
}