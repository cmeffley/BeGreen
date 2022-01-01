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
} from 'reactstrap';
import { Icon } from 'semantic-ui-react';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='navigation' dark expand="md">
        <NavbarBrand href="/"><Icon name='tree'/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/quiz">Quiz</Link>
            </NavItem>
          { user
            && <>
             <NavItem>
              <Link className="nav-link" to="/ideas">Share Ideas</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/treeActivity">My Activities</Link>
            </NavItem>
            </>
          }
          </Nav>
          { user !== null
            && <div className='auth-btn-container'>
                {
                  user ? <Icon name='sign-out' size='large' inverted color='grey' onClick={signOutUser}></Icon>
                    : <Icon name='sign-in' size='large' inverted color='grey' onClick={signInUser}></Icon>
                }
              </div>
            }
        </Collapse>
      </Navbar>
    </div>
  );
};
NavBar.propTypes = {
  user: PropTypes.any,
};
export default NavBar;
