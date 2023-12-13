import React, { Component } from "react";
import voxLogo from "../img/vox-media-logo.png"
import leidosLogo from "../img/leidos_logo.png"
import gaLogo from "../img/ga_logo.png"
import mercuryLogo from "../img/mercury_logo.png"
import furtherLogo from "../img/further_english_logo.png"
import nhLogo from "../img/nh_logo.png"
import clemsonLogo from "../img/clemson_logo.png"

class ExperienceIcon extends React.Component {
  render() {
    const workLogos = [
      voxLogo,
      leidosLogo,
      mercuryLogo
    ]

    return (
      <img src={(this.props.logo === "voxLogo"
        ? voxLogo : this.props.logo === "leidosLogo" ? leidosLogo
          : this.props.logo === "gaLogo" ? gaLogo
            : this.props.logo === "mercuryLogo" ? mercuryLogo
              : this.props.logo === "furtherLogo" ? furtherLogo
                : this.props.logo === "nhLogo" ? nhLogo
                  : this.props.logo === "clemsonLogo" ? clemsonLogo
                    : "")} className="exp-logo" alt={this.props.alt_text} ></img>
    )
  }
}

export default ExperienceIcon;