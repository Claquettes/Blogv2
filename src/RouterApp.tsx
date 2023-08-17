import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/TopBar";

import App from "./App";
import LandingPageComponent from "./components/LandingPage";
import "./App.css";

import Socials from "./pages/Socials";
import OtherPage from "./pages/OtherPage";
import AboutMeComponent from "./components/AboutMe";

function RouterApp() {
  return (
    <Router>
      <TopBar />

      <Routes>
        <Route path="/" element={<LandingPageComponent />} />
        <Route path="/Socials" element={<Socials />} />
        <Route path="/OtherPage" element={<OtherPage />} />
        <Route path="/AboutMePage" element={<AboutMeComponent />} />
        <Route path="/Projects" element={<App />} />
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
