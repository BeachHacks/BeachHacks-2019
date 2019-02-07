import React, { Component } from 'react';

import Register from './Register';
import Image from '../Images/beachhacks header image.svg';


class Header extends Component {

  render() {
    return (
      <div id="header">
        <div className="container">
          <div className="header-rounded">
            <img src={Image} alt="BeachHacks April 20-21st" className="beachhacks-image"/>
            <Register>
              <button className="apply-button">REGISTER</button>
            </Register>
          </div>   
          </div>    
        {/* <img src={logo} className="beachhacks-logo" alt="logo" />
        <p>April 20, 2019 - April 21, 2019</p>
        <p>California State University, Long Beach</p> */}
        {/* Apply button with surrounding a tag */}
        {/* <Register>
          <button className="apply-button">REGISTER</button>
        </Register>
        <button className="apply-button">DARK MODE</button> */}
      </div>
    );
  }

}

export default Header;