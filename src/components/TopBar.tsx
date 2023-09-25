import { Link } from "react-router-dom";

import "./styles/TopBar.scss";

function BasicExample() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="TopBar">
      <div className="Name">
        <a href="/">
          <h1>Mathieu Ponton</h1>
        </a>
      </div>
      <div className="NavBarDiv">
        <span
          className="TopBarLink"
          onClick={() => scrollToSection("LandingPage")}
        >
          Home
        </span>

        <span className="TopBarLink">
          <a href="https://github.com/Claquettes" target="_blank">
            Github
          </a>
        </span>
        <Link to="https://www.linkedin.com/in/mathieu-ponton/">
          <span className="TopBarLink">Linkedin</span>
        </Link>
        <Link to="https://www.linkedin.com/in/mathieu-ponton/overlay/1635518664594/single-media-viewer/?profileId=ACoAADOJ2fUBvelmwOJb_f5vHvyX8em8_iQ27Xs">
          <span className="TopBarLink">Resume</span>
        </Link>
      </div>
    </div>
  );
}

export default BasicExample;
