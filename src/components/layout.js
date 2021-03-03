/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Buttons from './Buttons.js'
// import {Button} from 'react-bootstrap'
import {Button, icons} from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from "./header"
import "./layout.css"
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import Slide from '@material-ui/core/Slide';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className='enter'
      >
        <main>{children}</main>
        {/* <div className='secondBox'>
      <div className='box'>
    <h1>Justin Davidson</h1>
    <h3>Full Stack Developer</h3>
    </div>
    </div> */}

        <Buttons />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
