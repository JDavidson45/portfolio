import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image'
import Slide from '@material-ui/core/Slide';

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Slide direction='up' in='true' timeout={1000}>

    <BackgroundImage className='background' fluid={props.data.indexImage.childImageSharp.fluid}>
      <div className='secondBox'>
      <div className='box'>

    <h1>Justin Davidson</h1>
    <h3>Full Stack Developer</h3>
    </div>
    </div>
    </BackgroundImage>
    </ Slide>
    {/* <Link to="/about/"><Button variant='light' size='sm'>About Page</Button></Link>
    <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query {
  indexImage: file(relativePath: { eq: "4K-Tech-HD-Background.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
