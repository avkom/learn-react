import React from 'react';

export default class FilmMiniCard extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.poster_path} alt={this.props.title} />
                <div>
                    <span>{this.props.title}</span>
                    <span>{this.props.release_date}</span>
                </div>
                <div>{this.props.genres.join(', ')}</div>
            </div>
        );
    }
}