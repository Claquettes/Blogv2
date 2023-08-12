import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import App from "./App";
import "./App.css";

import Socials from "./pages/Socials";
import OtherPage from "./pages/OtherPage";

function RouterApp() {
  return (
    <Router>
      <div>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/Socials">Socials</Link>
          <Link to="/OtherPage">OtherPage</Link>
        </Nav>
      </div>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Socials" element={<Socials />} />
        <Route path="/OtherPage" element={<OtherPage />} />
        <Route
          path="*"
          element={
            <div>
              <h1>404 we are lost.</h1>
              <h3>Click here to go back to the home page</h3>
              <Link to="/">Home</Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default RouterApp;
