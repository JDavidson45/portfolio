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
      <div className='box'>
    <h1 style={{textDecoration: 'underline'}}>Justin Davidson</h1>
    <h3 style={{textDecoration: 'underline'}}>Full Stack Developer</h3>
    </div>
    </Slide>
    <div className='entrance'>
    {/* <BackgroundImage className='background' fluid={props.data.indexImage.childImageSharp.fluid}> */}
      <div className='secondBox'>

    </div>
    <Slide direction='up' in='true' timeout={1000}>
          <div className='contact'>
        <h1>Contact Me!</h1>
        <p style={{width: '100vh'}}>Hello I am a passionate developer looking for new opportunities willing to learn new technologies. Feel free to contact me via email or LinkedIn. I will gladly get back to you ASAP. You can learn <a href='/about'>about me</a> and my skills so please stay a while. Thanks for checking out my website and I look forward to being in contact with you!</p>
        </div>
        </Slide>
    {/* </BackgroundImage> */}
    {/* </ Slide> */}
    </div>

  </Layout>
)

export default IndexPage

// export const pageQuery = graphql`
// query {
//   indexImage: file(relativePath: { eq: "techy.gif" }) {
//     childImageSharp {
//       fluid(maxWidth: 4000) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
// `;
