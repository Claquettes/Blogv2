import { useRef } from "react";
import "./styles/LandingPage.scss";
import AboutMeComponent from "./AboutMe";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import NameTitleComponent from "./NameTitle";
import App from "../App";

import top from "../assets/wptop1.png";
import two from "../assets/wptwo.png";

function LandingPageComponent() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Parallax pages={6} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={0.7}
          factor={1}
          style={{
            zIndex: -1,
            backgroundImage: `url(${top})`,
            backgroundSize: "fill",
            backgroundPosition: "center",
            marginTop: "-12%",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0.0}
          speed={1.5}
          factor={1}
          style={{ marginTop: "-150px" }}
        >
          <div className="NameTitle">
            <section className="LandingPage">
              <NameTitleComponent />
            </section>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.51}
          speed={1.2}
          factor={1}
          style={{
            zIndex: -1,
            backgroundImage: `url(${two})`,
            backgroundSize: "fill",
            backgroundPosition: "right",
          }}
        ></ParallaxLayer>

        <ParallaxLayer offset={0.8} speed={2} factor={1}>
          <section className="aboutme" id="aboutme">
            <AboutMeComponent />
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1.85} speed={0.5} factor={17}>
          <section className="projects" id="projects">
            <App />
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={17} speed={0.5} factor={1}></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default LandingPageComponent;
