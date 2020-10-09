import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from 'react-bootstrap';
import Header from '../components/header'

const Projects = () => (
  <div>
    <Header />
    <h1>Projects</h1>
    <p>these are the projects ive done</p>
    <br/>
    <Link to="/"><Button size='sm'>Go back to the homepage</Button></Link>
    </div>
)

export default Projects
