import React from "react"
import { Link } from "gatsby"
import vid from '../../public/static/vid.mp4'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from 'react-bootstrap';
import Header from "../components/header";
import Buttons from "../components/Buttons";
import { flexbox } from "@material-ui/system";
import LinkIcon from '@material-ui/icons/Link';
const Earbuds = () => (
  <div>
  <Header />
  <div className='video'>
    <h1 className='welcome'>Welcome to Earbuds!</h1>
    <video  src={vid} width="600" height="300" controls="controls" autoplay="true" />
    <br/>
     <LinkIcon><button href="https://earbuds.web.app"></button></LinkIcon>
    </div>

     <Buttons />
    </div>
)

export default Earbuds
