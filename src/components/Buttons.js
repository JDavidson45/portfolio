import React from "react"
import { Button } from "@material-ui/core"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import "./layout.css"
import EmailIcon from "@material-ui/icons/Email"
import Slide from "@material-ui/core/Slide"
import { IconButton } from '@material-ui/core';

class Buttons extends React.Component {
  render() {
    return (
      <>
        <Slide direction="up" in="true" timeout={1000}>
          <div className="myinfo">
            <div className="outsideinfo">
              {/* <div className="innermyinfo"> */}
                {/* <div className="linktome"> */}
                  <div style={{display: 'flex', justifyContent: 'center', margin: '15px'}}>
                <IconButton  className="linkedIn" href="https://www.linkedin.com/in/jdavidson45/"><LinkedInIcon /></IconButton>
                  <IconButton href="https://github.com/JDavidson45/"><GitHubIcon /></IconButton>
                  <IconButton href="mailto:justindavidson45@gmail.com"><EmailIcon /></IconButton>
                  </div>
                {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </Slide>
      </>
    )
  }
}

export default Buttons
