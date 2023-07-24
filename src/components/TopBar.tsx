import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./styles/TopBar.css";

function BasicExample() {
  return (
    <div className="TopBar">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Mathieu 'Claquettes' Ponton</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://ponton-mathi.eu">Home</Nav.Link>
              <Nav.Link href="https://ponton-mathi.eu/blog">DevBlog</Nav.Link>
              <NavDropdown title="Socials" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://www.linkedin.com/in/mathieu-ponton/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://wakatime.com/@Claquettes"
                  target="_blank"
                  rel="noreferrer"
                >
                  WakaTime
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://twitter.com/Claquettosaure"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="https://github.com/Claquettes"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="https://ponton-mathi.eu">About Me</Nav.Link>
              <Nav.Link href="https://ponton-mathi.eu">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
