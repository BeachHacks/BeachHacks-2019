import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navigation extends Component {

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">Beach Hacks</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1}>
                                <AnchorLink href="#faq">FAQ</AnchorLink>
                            </NavItem>
                            <NavItem eventKey={2}>
                                <AnchorLink href="#sponsors">Sponsors</AnchorLink>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;