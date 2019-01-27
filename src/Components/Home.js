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
        <section id="faq">
          <DropButton header="When is it?" body="BeachHacks is 24 hours long starting on April 13, 2019 and ending on April 14, 2019. A more detailed schedule will be released closer to the event." />
        </section>
        <FAQ />
        <Sponsors />
      </div>
    );
  }
}
