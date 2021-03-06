import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"
import JustinResume from "../../public/static/Resume5.pdf"
import logo from "../../public/static/logo.png"
import Collapse from "react-bootstrap/Collapse"
import Slide from "@material-ui/core/Slide"

const Header = ({ siteTitle }) => (
  <div className='layer'>
    <Slide direction="up" in="true" timeout={1000}>
      <Navbar collapseOnSelect bg="light" expand="true">
        <Navbar.Brand href="/">
          <img src={logo} width="50" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Me & My Skills</Nav.Link>
            <Nav.Link href={JustinResume}>
              Resume
            </Nav.Link>
            <NavDropdown title="Projects">
              <NavDropdown.Item href="/Earbuds">
                EarBuds
              </NavDropdown.Item>
              <NavDropdown.Item href="/Quarintini">
                Quarintini
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Slide>
  </div>
)

export default Header
