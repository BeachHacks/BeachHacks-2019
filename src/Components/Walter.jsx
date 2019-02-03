import React, { Component } from 'react';
import WalterIdle from '../Images/crab-idle.png';
import WalterHover from '../Images/crab-hover.png';
import BeachHacks from '../Images/beachhacks-nav.png';
export default class Walter extends Component {

  state = {
    image: WalterIdle
  };

  hover() {
    const walter = (this.state.image === WalterIdle) ? WalterHover : WalterIdle;
    this.setState({ image: walter });
  }

  render() {
    return (
      <div className="navbrand">
        <img className="walter-icon" src={this.state.image} alt="Walter" onMouseEnter={this.hover.bind(this)} onMouseLeave={this.hover.bind(this)} />
        <img className="beachhacks-nav" src={BeachHacks} alt="BeachHacks"/>
      </div>
    )
  }
}