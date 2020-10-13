/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import {Button} from 'react-bootstrap'
import {Button, icons} from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from "./header"
import "./layout.css"
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
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
      <div
        style={{
          //margin: `0 auto`,
          //maxWidth: 960,
          //padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
          <div className='contact'>
        <h1>Contact Me!</h1>
        <p>Thanks for checking out my website. Feel free to contact me via email or LinkedIn. I will gladly get back to you ASAP. I look forward to being in contact with you.</p>
        </div>
        <div className='myinfo'>
          <div className='outsideinfo'>
          <div className='innermyinfo'>
            <div className='linktome'>
         {/* <LinkedInIcon className='bg'>linkedin</LinkedInIcon> */}
         <Button
        variant="link"
        color="primary"
        startIcon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/jdavidson45/"
      />
      <Button
        variant="link"
        color="default"
        startIcon={<GitHubIcon />}
        href="https://github.com/JDavidson45/"
      />
      <Button
      size='large'
        variant="link"
        color="default"
        startIcon={<EmailIcon />}
        href="mailto:justindavidson45@gmail.com"
      />
         {/* <GitHubIcon className='bg'><IconButton href='https://www.linkedin.com/in/jdavidson45/'></IconButton></GitHubIcon>
         <MailIcon className='bg'>email</MailIcon> */}
         </div>
         </div>
        </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
