import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'


const AboutPage = () => (
  <div>
    <Header />
    <h1>This is about me</h1>
    <p>I studied radiology in college and considered going into medicine. As I reflected on my choices, I became curious about tech. I started building computers on my own without any prior knowledge. I then had the desire to build software that other companies and organizations can benefit and contribute to the success of their businesses. Coding fascinates me much like learning about the human body; it’s full of intricate systems that interact with each other. I am currently a full stack developer specializing in Javascript and the MERN stack. I am always open to new technologies.</p>
    <Link to="/page-3">Go to page 3</Link>
    <br/>
    <Link to="/">Go back to the homepage</Link>
    </div>
)

export default AboutPage
