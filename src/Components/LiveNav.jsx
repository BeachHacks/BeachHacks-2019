import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Walter from "./Walter";

class LiveNav extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" className="item-logo">
                <Walter />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem className="item" eventKey={1}>
                <AnchorLink offset="25" href="#schedule">
                  <p>SCHEDULE</p>
                </AnchorLink>
              </NavItem>
              <NavItem className="item" eventKey={0}>
                <AnchorLink offset="125" href="#links">
                  <p>LINKS & MAP</p>
                </AnchorLink>
              </NavItem>
              <NavItem className="item" eventKey={0}>
                <AnchorLink offset="125" href="#parking-info">
                  <p>PARKING</p>
                </AnchorLink>
              </NavItem>
              <NavItem className="item" eventKey={2} href="/discord">
                <p>DISCORD</p>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <a
          id="mlh-trust-badge"
          href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg"
            alt="Major League Hacking 2019 Hackathon Season"
          />
        </a>
      </div>
    );
  }
}

export default LiveNav;
