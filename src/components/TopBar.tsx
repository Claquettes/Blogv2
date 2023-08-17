import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./styles/TopBar.css";

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
        <Link to="/Socials">
          <h4>Resume</h4>
        </Link>
      </div>
    </div>
  );
}

export default BasicExample;
