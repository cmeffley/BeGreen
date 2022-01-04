import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
  const history = useHistory();

  const signOutToLanding = () => {
    signOutUser();
    history.push('/');
  };

  const signInAndGo = () => {
    signInUser();
    history.push('/');
  };

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
            <NavItem>
              <Link className="nav-link" to="/resources">Resources</Link>
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
                  user ? <Icon name='sign-out' size='large' inverted color='grey' onClick={signOutToLanding}></Icon>
                    : <Icon name='sign-in' size='large' inverted color='grey' onClick={signInAndGo}></Icon>
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
