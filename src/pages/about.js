import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Slide from "@material-ui/core/Slide"
import "../components/layout.css"
import { Avatar } from "@material-ui/core"
import pic from "../../public/static/portfolioPic.jpeg"
import Buttons from "../components/Buttons"
import { black } from "color-name"
import GetAppIcon from "@material-ui/icons/GetApp"
import { IconButton } from "@material-ui/core"
import JustinResume from "../../public/static/Resume5.pdf"
import Tooltip from "@material-ui/core/Tooltip"
const AboutPage = () => (
  <>
    <Header />
    <div className="backgroundabout">
      <h1 className="hello">hello</h1>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Welcome To My Website!
      </h1>
      <Slide direction="up" in="true" timeout={1000}>
        <img
          src={pic}
          className="aboutmepic"
          style={{ height: "370px", width: "300px" }}
        ></img>
      </Slide>
      <div style={{ textAlign: "center", margin: "90px" }}>
        <div className="download">
          <Slide direction="up" in="true" timeout={1000}>
            <h1 style={{ color: "white" }}>My Technical Skills</h1>
          </Slide>
          <Slide direction="up" in="true" timeout={1000}>
            <Tooltip title="Download Resume" placement="top-start">
              <IconButton color="primary" href={JustinResume} download>
                <GetAppIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Slide>
        </div>
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
              Along the way I got fascinated by all things computer. It occurred to me that human beings and computers share brains, hearts and nervous systems that need to work seamlessly in order to produce healthy results.Before I knew it, I was spending more time teaching myself how to build computers, without any training or formal knowledge, than I was studying radiology. I realized that my true calling was technology rather than medicine, and I’ve never looked back.
            </p>
          </div>
        </Slide>
      </div>

      <Buttons />
    </div>
  </>
)

export default AboutPage
