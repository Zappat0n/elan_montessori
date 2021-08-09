import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import logo from 'images/logo_elan.svg';

const NavLogo = ({ display }) => {
  console.log(display);
  return (
    <Navbar.Brand className={ display } href="#home">
    <img
      src= { logo }
      width="225"
      height="100%"
      className="d-inline-block align-top"
      alt="Elan logo"
    />
  </Navbar.Brand>
)
}

NavLogo.propTypes = {
  display: PropTypes.string.isRequired
}

export default NavLogo;
