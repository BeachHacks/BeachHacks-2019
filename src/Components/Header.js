import React, { Component } from "react";

import Register from "./Register";
import Image from "../Images/beachhacks header image.svg";
// import Cloud1 from "../Images/background-images/cloud1.png";
// import Cloud2 from "../Images/background-images/cloud2.png";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="container">
          <div className="header-rounded container">
            <img
              src={Image}
              alt="BeachHacks April 20-21st"
              className="beachhacks-image"
            />
            <br/>
            <br/>
            
            <Register>
              {/* <a href="/live"> */}
                {/* <button className="apply-button">WE ARE LIVE</button> */}
                <button className="apply-button">See you next year!</button>
              {/* </a> */}
            </Register>
            <br/>
          </div>
          {/* <div className="clouds">
            <img src={Cloud1} alt="Cloud1" className="cloud1" />
            <img src={Cloud2} alt="Cloud2" className="cloud2" />
      </div> */}
        </div>
        {/* <img src={logo} className="beachhacks-logo" alt="logo" />
        <p>April 20, 2019 - April 21, 2019</p>
        <p>California State University, Long Beach</p> */}
        {/* Apply button with surrounding a tag */}
        {/* <Register>
          <button className="apply-button">REGISTER</button>
        </Register>
        <button className="apply-button">DARK MODE</button>*/}
      </div>
    );
  }
}

export default Header;
