import React, { Component } from 'react';
import Menu from 'components/Menu';

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <div className="inner">
                    <Menu />
                </div>
            </div>
        )
    }

}
