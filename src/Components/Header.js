import React, { Component } from 'react';

import Register from './Register';
import logo from '../Images/beachhacks logo.png';


class Header extends Component {

  render() {
    return (
      <div id="header">
        <img src={logo} className="beachhacks-logo" alt="logo" />
        <p>April 20, 2019 - April 21, 2019</p>
        <p>California State University, Long Beach</p>
        {/* Apply button with surrounding a tag */}
        <Register>
          <button className="apply-button">Register</button>
        </Register>
      </div>
    );
  }

}

export default Header;