import React from 'react';
import FilmMiniCard from './FilmMiniCard';

export default class FilmList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map(
                        (item) => {
                            <FilmMiniCard value={item} />
                        }
                    )
                }
            </div>
        );
    }
}