import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./styles/TopBar.scss";

function BasicExample() {
  return (
    <div className="TopBar">
      <div className="Name">
        <h1>Mathieu Ponton </h1>
      </div>
      <div className="NavBarDiv">
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/AboutMePage">
          <h4>AboutMe</h4>
        </Link>
        <Link to="/Projects">
          <h4>Projects</h4>
        </Link>
        <Link to="https://www.linkedin.com/in/mathieu-ponton/">
          <h4>Linkedin</h4>
        </Link>
        <Link to="https://www.linkedin.com/in/mathieu-ponton/overlay/1635518664594/single-media-viewer/?profileId=ACoAADOJ2fUBvelmwOJb_f5vHvyX8em8_iQ27Xs">
          <h4>Resume</h4>
        </Link>
      </div>
    </div>
  );
}

export default BasicExample;
