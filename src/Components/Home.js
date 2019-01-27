import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Sponsors from './Sponsors';
import FAQ from './FAQ';
import DropButton from './DropButton';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <FAQ />
        <Sponsors />
      </div>
    );
  }
}
