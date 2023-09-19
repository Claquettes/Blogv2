import "./styles/LandingPage.scss";
import AboutMeComponent from "./AboutMe";
import AboutMeLangComponent from "./AboutMeLang";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import NameTitleNeonComponent from "./NameTitleNeon";
import App from "../App";

import top from "../assets/wptop1.png";
import two from "../assets/wptwo.png";
import side from "../assets/side.png";
import portrait from "../assets/portrait.png";
import bikes from "../assets/bikes2.png";
import lamp from "../assets/lamp.png";

function LandingPageComponent() {
  return (
    <div style={{ marginTop: "10%" }}>
      <Parallax pages={10}>
        <ParallaxLayer //background top
          offset={0}
          speed={0.7}
          factor={1}
          style={{
            zIndex: -10,
            backgroundImage: `url(${top})`,
            backgroundSize: "fill",
            backgroundPosition: "right",
            marginTop: "-12%",
          }}
        ></ParallaxLayer>
        <ParallaxLayer //text top
          offset={0.0}
          speed={1.5}
          factor={1.2}
          style={{
            zIndex: "9",
            marginTop: "-5%",
            marginLeft: "-15%",
          }}
        >
          <div className="NameTitle">
            <section className="LandingPage">
              <NameTitleNeonComponent />
            </section>
          </div>
        </ParallaxLayer>
        <ParallaxLayer //portrait background
          offset={0.7}
          speed={0.5}
          factor={1.2}
          style={{
            zIndex: -1,
            backgroundImage: `url(${portrait})`,
            backgroundSize: "contain",
            backgroundPosition: "right",
          }}
        ></ParallaxLayer>

        <ParallaxLayer //2nd portrait horizontal scrolling
          offset={0.6}
          speed={1}
          factor={1}
          style={{
            zIndex: -1,
            backgroundImage: `url(${bikes})`,
            backgroundSize: "contain",
            backgroundPosition: "left",
          }}
        ></ParallaxLayer>

        <ParallaxLayer //SIDE
          offset={0.25}
          speed={3.5}
          factor={0.35}
          style={{
            zIndex: 3,
            backgroundImage: `url(${side})`,
            backgroundSize: "contain",
            backgroundPosition: "left",
            marginLeft: "-10%",
          }}
        ></ParallaxLayer>

        <ParallaxLayer //background 2nd
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

        <ParallaxLayer
          offset={0.8}
          speed={2}
          factor={1} //content 2nd
          style={{ zIndex: 1, marginTop: "-5%" }}
        >
          <section className="aboutme" id="aboutme">
            <AboutMeComponent />
          </section>
        </ParallaxLayer>
        <ParallaxLayer //lang about me
          offset={0.99}
          speed={1.5}
          factor={1}
          style={{ zIndex: 1 }}
        >
          <AboutMeLangComponent />
        </ParallaxLayer>
        <ParallaxLayer //lamp
          offset={0.8}
          speed={3.5}
          factor={1.5}
          style={{
            zIndex: -5,
            backgroundImage: `url(${lamp})`,
            backgroundSize: "contain",
            backgroundPosition: "right",
            filter: "blur(1px)",
            boxShadow: "0px 0px 20px 20px rgba(0,0,0,0.75)",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2.1}
          factor={106}
          style={{ zIndex: 1, marginTop: "-55%" }}
        >
          <section className="projects" id="projects">
            <App />
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={25} speed={2.5} factor={1}></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default LandingPageComponent;
