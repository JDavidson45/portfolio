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
    <p>Proficient: Javascript, Node/Express, Git, Github, HTML5, CSS3, ES6, React, Redux, Sequelize</p>
    <p>Knowledgeable: Socket.io, Mocha, Jasmine</p>
    <p>Some Familiarity: SQL, Firebase</p>
    <br/>
    <Link to="/"><Button size='sm'>Go back to the homepage</Button></Link>
    </div>
)

export default Skills
