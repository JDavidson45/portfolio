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
  <div >
    <Header />
    <div className='big'>
 <h1 style={{ textAlign: "center" }}>Welcome to EarBuds!</h1>
  <div className="boxnbuttons">
      <div className="video">
        <Slide direction="up" in="true" timeout={1000}>
          <div className="welcome"></div>
        </Slide>
        <video
          src={vid}
          width="600"
          height="300"
          controls="controls"
          autoplay="true"
        />


      </div>
    </div>
    <div className='infobtn'>
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
    </div>
      <div className="earbudsdesc">
        <p style={{ width: "800px" }}>
          Our team has built a web app for listening to podcasts with friends
          and family in real time. The app is for Spotify Premium users only.
          The app allows you to search for a podcast, add it to queue, play and
          pause for all of the users in room as well see your daily
          recommendations, Spotify top podcasts and podcasts essentials. The
          users can chat and share the app via social media and/or email. For
          our serverless app we have used Cloud Firestore to manage rooms,
          users, messaging and player all in real time. On the front end React
          was used to display these db updates as well as Redux to manage the
          state of our app. For the podcasts we have used the newly released
          Spotify Podcast API that allowed us to browse, search and follow our
          favorite shows and Spotify Web API for the general playback.
        </p>
      </div>
    <Buttons />

  </div>
)

export default Earbuds
