import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import DeVry from '../Images/Sponsors/devry.png';
import Google from '../Images/Sponsors/google.png';
import Heroku from '../Images/Sponsors/heroku.png';
import Asi from '../Images/Sponsors/asi.png';
import CECS from '../Images/Sponsors/cecs.png';

export default class Sponsors extends Component {

    render() {
        return (
            <div id ='sponsors'>
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <img className="sponsor" src={Google} alt="google" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <img className="sponsor" src={Heroku} alt="heroku" />
                        </Col>
                        <Col xs={12} md={6}>
                            <img className="sponsor" src={DeVry} alt="devry university" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <img className="sponsor-wide" src={Asi} alt="  asi" />
                        </Col>
                        <Col xs={12} md={6}>
                            <img className="sponsor-wide" src={CECS} alt="CECS" />
                        </Col>
                    </Row>
                </Grid>
            </div >
        )
    }
}