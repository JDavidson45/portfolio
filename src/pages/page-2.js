import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from 'react-bootstrap';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/page-3">Go to page 3</Link>
    <br/>
    <Link to="/"><Button size='sm'>Go back to the homepage</Button></Link>
  </Layout>
)

export default SecondPage
