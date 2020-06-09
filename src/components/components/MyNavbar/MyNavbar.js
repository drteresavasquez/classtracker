import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './MyNavbar.scss';

import authRequests from '../../../helpers/data/authRequests';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
    admin: PropTypes.bool,
    runAway: PropTypes.func,
    setStudent: PropTypes.func,
  };

  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  githubAuth = () => {
    authRequests
      .authenticate()
      .then((result) => {
        this.props.setStudent(result);
      })
      .catch(err => console.error('error in authenticate', err));
  };

  logoutClickEvent = (e) => {
    e.preventDefault();
    authRequests.logoutUser();
    this.props.runAway();
  }

  render() {
    const { authed, admin } = this.props;
    const buildNavbar = () => {
      if (admin) {
        return (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={ Link } to='/tracker'>Tracker</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ Link } to='/submit'>Submit</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ Link } to='/students'>Students</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ Link } to='/calendar'>Calendar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ Link } to='/assignments'>Assignments</NavLink>
            </NavItem>
            <NavItem>
              <Button color="info" onClick={this.logoutClickEvent} >Logout</Button>
            </NavItem>
          </Nav>
        );
      }
      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={ Link } to='/submit'>Submit</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ Link } to='/students'>Students</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ Link } to='/calendar'>Calendar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ Link } to='/assignments'>Assignments</NavLink>
            </NavItem>
            <NavItem>
              <Button color="info" onClick={this.logoutClickEvent} >Logout</Button>
            </NavItem>
          </Nav>
        );
      }
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={ Link } to='/students'>Students</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ Link } to='/calendar'>Calendar</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ Link } to='/assignments'>Assignments</NavLink>
          </NavItem>
          <NavItem>
            <Button color="warning" onClick={this.githubAuth}>Login</Button>
          </NavItem>
        </Nav>
      );
    };

    return (
      <div className="my-navbar">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/"><img height="40px" src="ctlogo.png" /></NavbarBrand>
          <NavbarToggler onClick={e => this.toggle(e)} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
