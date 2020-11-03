import React from "react"
import { Button } from "@material-ui/core"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import "./layout.css"
import EmailIcon from "@material-ui/icons/Email"
import Slide from "@material-ui/core/Slide"

class Buttons extends React.Component {
  render() {
    return (
      <>
        <Slide direction="up" in="true" timeout={1000}>
          <div className="myinfo">
            <div className="outsideinfo">
              <div className="innermyinfo">
                <div className="linktome">
                  <Button
                    className="linkedIn"
                    variant="link"
                    color="primary"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/jdavidson45/"
                  />
                  <Button
                    variant="link"
                    color="default"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/JDavidson45/"
                  />
                  <Button
                    variant="link"
                    color="default"
                    startIcon={<EmailIcon />}
                    href="mailto:justindavidson45@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </>
    )
  }
}

export default Buttons
