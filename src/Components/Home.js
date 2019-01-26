import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Sponsors from './Sponsors';
class Home extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <Header />
                <Sponsors/>
            </div>
        );
    }
}

export default Home;