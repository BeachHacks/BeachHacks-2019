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
                <section id="faq">
                    <div className="contents">
                        <div className="faqelem">
                            <div className="question">
                                When is it?    
                            </div>
                            <div className="answer">
                                BeachHacks is 24 hours long starting on April 13, 2019 and ending on April 14, 2019. A more detailed schedule will be released closer to the event.
                            </div>
                        </div>
                    </div>
                </section>
                <Sponsors/>
            </div>
        );
    }
}

export default Home;