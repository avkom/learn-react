import React from 'react';

export default class Toggle extends React.Component {
    handleChange = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div>
                {
                    this.props.items.map(
                        (item) => {
                            return (
                                <label>
                                    <input 
                                        type='radio' 
                                        value={item.value} 
                                        checked={item.value === this.props.value}
                                        onChange={this.handleChange}
                                    />
                                    {item.label}
                                </label>
                            )
                        }
                    )
                }
            </div>
        );
    }
}