import React from "react"
import { Link } from "gatsby"
import { Button } from 'react-bootstrap';
import Header from '../components/header'
import Buttons from "../components/Buttons";
import Slide from '@material-ui/core/Slide';

const Skills = () => (
    <div>
    <Header />
     <Slide direction='up' in='true' timeout={1000}>
    <div className='skillset'>
    <h1>Hi My skill set</h1>
    <p>Proficient: Javascript, Node/Express, Git, Github, HTML5, CSS3, ES6, React, Redux, Sequelize, BootStrap, Material-UI</p>
    <p>Knowledgeable: Socket.io, Mocha, Jasmine, Firebase Cloud Firestore</p>
    <p>Some Familiarity: SQL, Firebase</p>
    {/* <Link to="/"><Button size='sm'>Go back to the homepage</Button></Link> */}
    </div>
    </Slide>
    <Buttons />
    </div>
)

export default Skills
