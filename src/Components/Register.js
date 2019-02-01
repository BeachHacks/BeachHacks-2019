import React, { Component } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
export default class Register extends Component {

    constructor(props) {
        super(props);
        this.openForm = this.openForm.bind(this);
    }

    openForm() {
        this.typeformEmbed.typeform.open();
    }


    render() {
        return (
            <div>
                <ReactTypeformEmbed
                    popup
                    autoOpen={false}
                    url="https://beachhacks.typeform.com/to/LGUC4U"
                    buttonText="Go!"
                    ref={tf => {
                        this.typeformEmbed = tf;
                    }}
                />
                <button className="apply-button" onClick={this.openForm} style={{cursor:'pointer'}}>Apply</button>
            </div>
        );
    }
}

