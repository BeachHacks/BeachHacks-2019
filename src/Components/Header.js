import React, { Component } from 'react';
import logo from '../Images/beachhacks logo.png';

class Header extends Component {

    render() {
        return (
            <div id="header">
                <img src={logo} className="beachhacks-logo" alt="logo" />
                <p>April 13, 2019 - April 14, 2019</p>
                <p>California State University, Long Beach</p>
                {/* Apply button with surrounding a tag */}
                <a href="/register">
                    <button className="apply-button">Apply</button>
                </a>
            </div>
        );
    }

}

export default Header;