import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'


const AboutPage = () => (
  <div>
    <Header />
    <h1>This is about me</h1>
    <p>Hello my name is</p>
    <Link to="/page-3">Go to page 3</Link>
    <br/>
    <Link to="/">Go back to the homepage</Link>
    </div>
)

export default AboutPage
