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
import Monster from "../Images/Sponsors/monster.png";
import Hint from "../Images/Sponsors/hintwater.png";
import Corsair from "../Images/Sponsors/corsair.png";
import Smashmallow from "../Images/Sponsors/smashmallow.png";
import MLH from "../Images/Sponsors/mlh.png";
import TheDavids from "../Images/Sponsors/thedavids.png";
import ElGato from "../Images/Sponsors/elgato.png";
import Bing from "../Images/Sponsors/bing.png";
import Discord from "../Images/Sponsors/discord.png";
import IEEE from "../Images/Sponsors/ieee.png";
import VGDA from "../Images/Sponsors/vgda.png";
import Taali from "../Images/Sponsors/taali.png";
import TasteNirvana from "../Images/Sponsors/taste nirvana.png";
import SweetJills from "../Images/Sponsors/sweetjills.png";
import CSULBEsports from "../Images/Sponsors/csulbesports.png";
import Balsamiq from "../Images/Sponsors/balsamiq.png";
import Sketch from "../Images/Sponsors/sketch.png";
import GoogleCloud from "../Images/Sponsors/googlecloudplatform.png";
import SweetSaucy from "../Images/Sponsors/sweetsaucy.png";
import LongBeachCreamery from "../Images/Sponsors/lbcreamery.png";

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
                <a
                  href="http://www.northropgrumman.com/Pages/default.aspx"
                  traget="_blank"
                >
                  <img
                    className="sponsor"
                    src={Northrop}
                    alt="northrp grumman"
                  />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.google.com/" target="_blank">
                  <img className="sponsor" src={Google} alt="google" />
                </a>
              </Sponsor>
            </Col>

            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://cloud.google.com/" target="_blank">
                  <img
                    className="sponsor"
                    src={GoogleCloud}
                    alt="google cloud platform"
                  />
                </a>
              </Sponsor>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.corsair.com/us/en/" target="_blank">
                  <img className="sponsor" src={Corsair} alt="corsair" />
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
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.elgato.com/en" target="_blank">
                  <img className="sponsor" src={ElGato} alt="el gato" />
                </a>
              </Sponsor>
            </Col>
          </Row>
          <Row />
          <Row>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.wolframalpha.com/" target="_blank">
                  <img className="sponsor" src={Wolfram} alt="wolfram alpha" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://discordapp.com/" target="_blank">
                  <img className="sponsor" src={Discord} alt="discord" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.heroku.com/" target="_blank">
                  <img className="sponsor" src={Heroku} alt="heroku" />
                </a>
              </Sponsor>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="http://thedavidexperience.com/" target="_blank">
                  <img className="sponsor" src={TheDavids} alt="davids" />
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
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.devry.edu/" target="_blank">
                  <img className="sponsor" src={DeVry} alt="devry university" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.sketch.com" target="_blank">
                  <img className="sponsor" src={Sketch} alt="sketch" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://balsamiq.cloud/" target="_blank">
                  <img className="sponsor" src={Balsamiq} alt="balsamiq" />
                </a>
              </Sponsor>
            </Col>
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
                <a href="https://www.badabeansnacks.com/" target="_blank">
                  <img
                    className="sponsor"
                    src={BadaBean}
                    alt="badabean badaboom"
                  />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.taalifoods.com/" target="_blank">
                  <img className="sponsor" src={Taali} alt="taali" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4} target="_blank">
              <Sponsor>
                <a href="https://smashmallow.com/" target="_blank">
                  <img
                    className="sponsor"
                    src={Smashmallow}
                    alt="smashmallow"
                  />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.monsterenergy.com/" target="_blank">
                  <img className="sponsor" src={Monster} alt="monster" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.drinkhint.com/" target="_blank">
                  <img className="sponsor" src={Hint} alt="hint" />
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
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.sujajuice.com/" target="_blank">
                  <img className="sponsor" src={Suja} alt="suja" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.bingbeverage.com/" target="_blank">
                  <img className="sponsor" src={Bing} alt="bing" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4} target="_blank">
              <Sponsor>
                <a href="https://www.tastenirvana.com/" target="_blank">
                  <img
                    className="sponsor"
                    src={TasteNirvana}
                    alt="taste nirvana"
                  />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="http://sweetjillsbakery.com/" target="_blank">
                  <img className="sponsor" src={SweetJills} alt="sweet jills" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4} target="_blank">
              <Sponsor>
                <a href="https://longbeachcreamery.com/" target="_blank">
                  <img
                    className="sponsor"
                    src={LongBeachCreamery}
                    alt="long beach creamery"
                  />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="http://sweetandsaucyshop.com/" target="_blank">
                  <img
                    className="sponsor"
                    src={SweetSaucy}
                    alt="sweet and saucy"
                  />
                </a>
              </Sponsor>
            </Col>
          </Row>
          <h1 className="sponsor-header">PARTNERS</h1>
          <Row>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://mlh.io/" target="_blank">
                  <img className="sponsor-wide" src={MLH} alt="mlh" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://www.asicsulb.org/corporate/" target="_blank">
                  <img className="sponsor-wide" src={Asi} alt="asicsulb" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
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
          <Row>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="http://ewh.ieee.org/sb/csulb/" target="_blank">
                  <img className="sponsor-wide" src={IEEE} alt="IEEE" />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="http://www.csulbesports.org/" target="_blank">
                  <img
                    className="sponsor-wide"
                    src={CSULBEsports}
                    alt="csulb esports"
                  />
                </a>
              </Sponsor>
            </Col>
            <Col xs={12} md={4}>
              <Sponsor>
                <a href="https://csulbvgda.com/index.html" target="_blank">
                  <img className="sponsor-wide" src={VGDA} alt="VGDA" />
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
