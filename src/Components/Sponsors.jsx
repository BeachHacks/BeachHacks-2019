import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import posed from "react-pose";

import DeVry from "../Images/Sponsors/devry.png";
import Google from "../Images/Sponsors/google.png";
import Heroku from "../Images/Sponsors/heroku.png";
import Asi from "../Images/Sponsors/asi.png";
import CECS from "../Images/Sponsors/cecs.png";
import Wolfram from "../Images/Sponsors/wolfram.png";
import Facebook from "../Images/facebooklogo.png";
import Instagram from "../Images/instagramlogo.png";
import Stickermule from "../Images/Sponsors/stickermule.png";
import ZestTea from "../Images/Sponsors/zest tea.png";
import Suja from "../Images/Sponsors/suja.png";
import OarsAndAlps from "../Images/Sponsors/oarsandalps.png";
import MSI from "../Images/Sponsors/msi.png";
import Northrop from "../Images/Sponsors/northrop.png";
import BadaBean from "../Images/Sponsors/badabean.png";

export default class Sponsors extends Component {
  render() {
    return (
      <div id="sponsors">
        <Grid>
          <h1 className="sponsor-header">SPONSORS</h1>
          <p className="sponsor-body">
            If you wish to sponsor our event, email us at{" "}
            <a className="futura" href="mailto:sponsorship@beachhacks.com">
              sponsorship@beachhacks.com
            </a>
          </p>
          <Row>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.google.com/" target="_blank">
                  <img className="sponsor" src={Google} alt="google" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="http://www.northropgrumman.com/Pages/default.aspx" traget="_blank">
                  <img className="sponsor" src={Northrop} alt="northrp grumman"/>
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.wolframalpha.com/" target="_blank">
                  <img className="sponsor" src={Wolfram} alt="wolfram alpha" />
                </a>
              </Sponsor>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.heroku.com/" target="_blank">
                  <img className="sponsor" src={Heroku} alt="heroku" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.devry.edu/" target="_blank">
                  <img className="sponsor" src={DeVry} alt="devry university" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://us.msi.com/" target="_blank">
                  <img className="sponsor" src={MSI} alt="msi" />
                </a>
              </Sponsor>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.oarsandalps.com/" target="_blank">
                  <img
                    className="sponsor"
                    src={OarsAndAlps}
                    alt="oars and alps"
                  />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.zesttea.com/" target="_blank">
                  <img className="sponsor" src={ZestTea} alt="zest tea" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a
                  href="http://hackp.ac/mlh-stickermule-hackathons"
                  target="_blank"
                >
                  <img
                    className="sponsor"
                    src={Stickermule}
                    alt="stickermule"
                  />
                </a>
              </Sponsor>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Sponsor>
                <a href="https://www.badabeansnacks.com/" target="_blank">
                  <img className="sponsor" src={BadaBean} alt="badabean badaboom" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={6}>
              <Sponsor>
                <a href="https://www.sujajuice.com/" target="_blank">
                  <img className="sponsor" src={Suja} alt="suja" />
                </a>
              </Sponsor>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Sponsor>
                <a href="https://www.asicsulb.org/corporate/" target="_blank">
                  <img className="sponsor-wide" src={Asi} alt="  asi" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={6}>
              <Sponsor>
                <a
                  href="https://www.csulb.edu/college-of-engineering/computer-engineering-computer-science"
                  target="_blank"
                >
                  <img className="sponsor-wide" src={CECS} alt="CECS" />
                </a>
              </Sponsor>
            </Col>
          </Row>
        </Grid>
        <h2 classname="socialmedia">
          <a href="https://www.facebook.com/BeachHacks/" target="_blank">
            <img
              src={Facebook}
              width="80"
              height="80"
              alt="BeachHacks Facebook"
            />
          </a>
          <a href="https://instagram.com/beachhackscsulb/" target="_blank">
            <img
              src={Instagram}
              width="80"
              height="80"
              alt="BeachHacks Instagram"
            />
          </a>
        </h2>
        <h3 className="sponsor-body footer">
          Made with{" "}
          <span role="img" alt="love">
            💖
          </span>{" "}
          from the 3 Musketeers of BeachHacks
        </h3>
      </div>
    );
  }
}

const Sponsor = posed.div({
  hoverable: true,
  init: { scale: 1, opacity: 0.5 },
  hover: { scale: 1.1, opacity: 1 }
});
