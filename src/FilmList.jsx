import React from 'react';
import FilmMiniCard from './FilmMiniCard';

export default class FilmList extends React.Component {
    render() {
        return (
            <div>
                <FilmMiniCard />
                <FilmMiniCard />
                <FilmMiniCard />
                <FilmMiniCard />
                <FilmMiniCard />
                <FilmMiniCard />
            </div>
        );
    }
}