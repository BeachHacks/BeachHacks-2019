import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
class Home extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <Header />
            </div>
        );
    }
}

export default Home;