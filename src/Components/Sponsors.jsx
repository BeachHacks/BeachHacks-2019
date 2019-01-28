import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import posed from 'react-pose';

import DeVry from '../Images/Sponsors/devry.png';
import Google from '../Images/Sponsors/google.png';
import Heroku from '../Images/Sponsors/heroku.png';
import Asi from '../Images/Sponsors/asi.png';
import CECS from '../Images/Sponsors/cecs.png';

export default class Sponsors extends Component {

  render() {
    return (
      <div id='sponsors'>
        <h1 className="sponsor-header">SPONSORS</h1>
        <p className="sponsor-body">If you wish to sponsor our event, email us at <a href="sponsorship@beachhacks.com">sponsorship.beachhacks.com</a></p>
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <Sponsor>
                <img className="sponsor" src={Google} alt="google" />
              </Sponsor>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Sponsor>
                <img className="sponsor" src={Heroku} alt="heroku" />
              </Sponsor>
            </Col>
            <Col xs={12} md={6}>
              <Sponsor>
                <img className="sponsor" src={DeVry} alt="devry university" />
              </Sponsor>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Sponsor>
                <img className="sponsor-wide" src={Asi} alt="  asi" />
              </Sponsor>
            </Col>
            <Col xs={12} md={6}>
              <Sponsor>
                <img className="sponsor-wide" src={CECS} alt="CECS" />
              </Sponsor>
            </Col>
          </Row>
        </Grid>
      </div >
    )
  }
}

const Sponsor = posed.div({
  hoverable: true,
  init: { scale: 1, opacity: 0.5 },
  hover: { scale: 1.1, opacity: 1 },

})