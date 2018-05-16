import React from 'react';
import FilmMiniCard from './FilmMiniCard';

export default class FilmList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.items.length > 0
                        ? this.props.items.map(
                            (item) => {
                                return <FilmMiniCard key={item.id} {...item} />
                            }
                        )

                        : (
                            <div>No films found</div>
                        )
                }
            </div>
        );
    }
}