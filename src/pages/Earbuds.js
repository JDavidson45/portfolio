import React from "react"
import { Link } from "gatsby"
import vid from "../../public/static/vid.mp4"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "@material-ui/core"
import Header from "../components/header"
import Buttons from "../components/Buttons"
import { flexbox } from "@material-ui/system"
import LinkIcon from "@material-ui/icons/Link"
import { IconButton } from "@material-ui/core"
import Slide from "@material-ui/core/Slide"
import GitHubIcon from "@material-ui/icons/GitHub"

const Earbuds = () => (
  <div>
    <Header />
    <div className="video">
      <Slide direction="up" in="true" timeout={1000}>
        <h1 className="welcome">Welcome to Earbuds!</h1>
      </Slide>
      <video
        src={vid}
        width="600"
        height="300"
        controls="controls"
        autoplay="true"
      />
      <br />
      <Slide direction="up" in="true" timeout={1000}>
        <IconButton href="https://earbuds.web.app">
          <LinkIcon />
        </IconButton>
      </Slide>
      <Slide direction="up" in="true" timeout={1000}>
      <IconButton href="https://github.com/Podcast-Party/Ear-Buds/">
          <GitHubIcon />
        </IconButton>
        </Slide>

    </div>

    <Buttons />
  </div>
)

export default Earbuds
