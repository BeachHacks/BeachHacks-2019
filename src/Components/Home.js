import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Sponsors from './Sponsors';
import FAQ from './FAQ';

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
