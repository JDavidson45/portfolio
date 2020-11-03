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
import { IconButton } from '@material-ui/core';
const Earbuds = () => (
  <div>
    <Header />
    <div className="video">
      <h1 className="welcome">Welcome to Earbuds!</h1>
      <video
        src={vid}
        width="600"
        height="300"
        controls="controls"
        autoplay="true"
      />
      <br />
      <IconButton href="https://earbuds.web.app"><LinkIcon /></IconButton>
    </div>

    <Buttons />
  </div>
)

export default Earbuds
