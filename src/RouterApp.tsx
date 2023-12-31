import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import LandingPageComponent from "./components/LandingPage";
import "./App.scss";

import OtherPage from "./pages/OtherPage";
import AboutMeComponent from "./components/AboutMe";

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageComponent />} />
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
