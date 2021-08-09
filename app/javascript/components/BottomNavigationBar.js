import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import I18n from '../i18n.js.erb';
import NavLogo from './NavLogo';
import './BottomNavigationBar.scss'

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <NavLogo display="d-inline d-lg-none" />
      <Navbar.Toggle className="justify-content-right" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav.Link href="/ten_reasons">{ I18n.t('index.ten_reasons') }</Nav.Link>
        <Nav.Link href="/the_school">{ I18n.t('index.the_school') }</Nav.Link>
        <NavDropdown title={ I18n.t('index.cycles') } id="basic-nav-dropdown">
          <NavDropdown.Item href="/infant_comunity">{ I18n.t('index.infant_comunity') }</NavDropdown.Item>
          <NavDropdown.Item href="/cdb">{ I18n.t('index.cdb') }</NavDropdown.Item>
          <NavDropdown.Item href="/primary_i">{ I18n.t('index.primary_i') }</NavDropdown.Item>
          <NavDropdown.Item href="/primary_ii">{ I18n.t('index.primary_ii') }</NavDropdown.Item>
        </NavDropdown>
        <NavLogo display="d-none d-lg-inline" />
        <Nav.Link href="/news">{ I18n.t('index.news') }</Nav.Link>
        <Nav.Link href="/secretary">{ I18n.t('index.secretary') }</Nav.Link>
        <Nav.Link href="/contact">{ I18n.t('index.contact') }</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar;
