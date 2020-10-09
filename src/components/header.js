import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import JustinResume from '../../public/static/Justin S Davidson - Resume 5 2-converted.pdf'
import logo from "../../public/static/logo.png"
const Header = ({ siteTitle }) => (
 <Navbar collapseOnSelect bg="light" expand="true">
  <Navbar.Brand href="/">
    <img
        src={logo}
        width="50"
        height="50"
      />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/about">About</Nav.Link>
    <Nav.Link href="/skills">Skills</Nav.Link>
      <NavDropdown title="Resume & Projects">
        <NavDropdown.Item href="https://earbuds.web.app/">EarBuds</NavDropdown.Item>
        <NavDropdown.Item href="https://github.com/grace-shopper-peeps/drinks">Quarintini</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={JustinResume} download>Download Resume</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
