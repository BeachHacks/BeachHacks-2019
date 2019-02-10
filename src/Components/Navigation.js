import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Register from './Register';
import Walter from './Walter';

class Navigation extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand >
                            <AnchorLink href="#header" className="item-logo">
                                <Walter />
                            </AnchorLink>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem className="item" eventKey={0}>
                                <AnchorLink href="#info"><p>ABOUT</p></AnchorLink>
                            </NavItem>
                            <NavItem className="item" eventKey={1}>
                                <AnchorLink href="#faq"><p>FAQ</p></AnchorLink>
                            </NavItem>
                            <NavItem className="item" eventKey={2}>
                                <AnchorLink href="#sponsors"><p>SPONSORS</p></AnchorLink>
                            </NavItem>
                            <NavItem className="item" eventKey={3}>
                                <Register><a>REGISTER</a></Register>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;