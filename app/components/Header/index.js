import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
//components
import Label from '../Label';

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    isOpen: false,
    active: 0
  };
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
        <Navbar color="primary" fixed="top" light={true} toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">
            <Label
              fontSize="35px"
            >
              Buffet App
            </Label>
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink 
                  href="/"
                  style={{ margin: "0px 10px" }}
                >
                  <Label
                    fontSize="20px"
                  >
                    จัดการที่นั่ง
                  </Label>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  target="_blank"
                  href="https://github.com/VatNan/buffet-application"
                  style={{ margin: "0px 10px" }}
                >
                  <Label
                    fontSize="20px"
                  >
                    Github
                  </Label>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}


export default Header;
