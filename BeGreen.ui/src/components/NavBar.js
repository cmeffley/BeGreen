import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/users">Users</Link>
            </NavItem>
          </Nav>
          {/* { user !== null
            && <div className='auth-btn-container'>
                {
                  user ? <Button color='danger' onClick={signOutUser}>Sign Out</Button>
                    : <Button color='info' onClick={signInUser}>Sign In</Button>
                }
              </div>
            } */}
            <Button color='danger' onClick={signOutUser}>Sign Out</Button>
            <Button color='info' onClick={signInUser}>Sign In</Button>
        </Collapse>
      </Navbar>
    </div>
  );
};
NavBar.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func
};
export default NavBar;
