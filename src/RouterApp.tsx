import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";

import App from "./App";
import LandingPageComponent from "./components/LandingPage";
import "./App.scss";

import Socials from "./pages/Socials";
import OtherPage from "./pages/OtherPage";
import AboutMeComponent from "./components/AboutMe";

function RouterApp() {
  return (
    <Router>
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
              <LandingPageComponent />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default RouterApp;
