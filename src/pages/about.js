import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Slide from "@material-ui/core/Slide"
import "../components/layout.css"
import { Avatar } from "@material-ui/core"
import pic from "../../public/static/portfolioPic.png"
import Buttons from "../components/Buttons"
const AboutPage = () => (
  <div>
    <Header />
    <div className="back">
      <Slide direction="up" in="true" timeout={1000}>
        <div className="aboutmeoutside">
          <div className="aboutme">
            <h1 style={{ textAlign: "center" }}>This is about me</h1>
            <Avatar
              src={pic}
              className="aboutmepic"
              style={{ height: "250px", width: "250px" }}
            />
            <br />
            <p className="text">
              I studied radiology in college and considered going into medicine.
              As I reflected on my choices, I became curious about tech. I
              started building computers on my own without any prior knowledge.
              I then had the desire to build software that other companies and
              organizations can benefit and contribute to the success of their
              businesses. Coding fascinates me much like learning about the
              human body; it’s full of intricate systems that interact with each
              other. I am currently a full stack developer specializing in
              Javascript and the MERN stack, see my skills{" "}
              <Link to="/skills">here</Link>. I am always open to new
              technologies.
            </p>
          </div>
        </div>
      </Slide>
    </div>
    <Buttons />
  </div>
)

export default AboutPage
