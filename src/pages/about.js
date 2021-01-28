import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Slide from "@material-ui/core/Slide"
import "../components/layout.css"
import { Avatar } from "@material-ui/core"
import pic from "../../public/static/portfolioPic.png"
import Buttons from "../components/Buttons"
import { black } from "color-name"
const AboutPage = () => (
  <>
    <Header />
    <div className="backgroundabout">
      <h1 className="hello">hello</h1>
      <h1 style={{textAlign: 'center', color: 'white'}}>Welcome To My Website!</h1>
      <Slide direction="up" in="true" timeout={1000}>
        {/* <Avatar
              src={pic}
              className="aboutmepic"
              style={{ height: "250px", width: "250px" }}
            /> */}
        <img
          src={pic}
          className="aboutmepic"
          style={{ height: "370px", width: "300px" }}
        ></img>
      </Slide>
      {/* <Slide direction='up' in='true' timeout={1000}> */}
      <div style={{ textAlign: "center", margin: "90px" }}>
        <Slide direction="up" in="true" timeout={1000}>
          <h1 style={{ color: "white" }}>My Technical Skills</h1>
        </Slide>
        <Slide direction="up" in="true" timeout={1000}>
          <div className="skillset">
            <p>
              Proficient: Javascript, Node/Express, Git, Github, HTML5, CSS3,
              ES6, React, Redux, Sequelize, BootStrap, Material-UI
            </p>
            <p>
              Knowledgeable: Socket.io, Mocha, Jasmine, Firebase Cloud Firestore
            </p>
            <p>Some Familiarity: SQL, Firebase</p>

            {/* <Link to="/"><Button size='sm'>Go back to the homepage</Button></Link> */}
          </div>
        </Slide>
        <br />
        <Slide direction="up" in="true" timeout={1000}>
          <h1 className="abouttitle">A Little About Me</h1>
        </Slide>
        <Slide direction="up" in="true" timeout={1000}>
          <div className="abouttext">
            <p>
              I studied radiology in college and considered going into medicine.
              As I reflected on my choices, I became curious about tech. I
              started building computers on my own without any prior knowledge.
              I then had the desire to build software that other companies and
              organizations can benefit and contribute to the success of their
              businesses. Coding fascinates me much like learning about the
              human body; it’s full of intricate systems that interact with each
              other. I am currently a full stack developer specializing in
              Javascript and the MERN stack. I am always open to new
              technologies.
            </p>
          </div>
        </Slide>
      </div>

      <Buttons />
    </div>
  </>
)

export default AboutPage
