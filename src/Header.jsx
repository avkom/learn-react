import React from 'react';
import Logo from './Logo'

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <Logo />
            </header>
        );
    }
}