import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from 'react-bootstrap';
import Header from '../components/header'
const Skills = () => (
    <div>
    <Header />
    <h1>Hi My skill set</h1>
    <p>Proficient</p>
    <br/>
    <Link to="/"><Button size='sm'>Go back to the homepage</Button></Link>
    </div>
)

export default Skills
