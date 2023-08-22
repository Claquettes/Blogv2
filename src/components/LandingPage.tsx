import React, { useState, useEffect, useRef } from "react";
import "./styles/LandingPage.scss";
import AboutMeComponent from "./AboutMe";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import App from "../App";

function LandingPageComponent() {
  const ref = useRef();
  useEffect(() => {
    const letters = document.getElementsByClassName("letter");
    //get the number of letters
    const numberOfLetters = letters.length;
    //for each letter, we want to add a class that will trigger the animation
    for (let i = 0; i < numberOfLetters; i++) {
      //we check if the element is "_" or " "
      if (letters[i].innerHTML === "_" || letters[i].innerHTML === " ") {
        //we add the class "special-letter-animation" to the element
        letters[i].classList.add("blinking-letter");
        letters[i].classList.add("letters-animation");
      }
      //we assign the type HTMLElement to the letter
      const letter = letters[i] as HTMLElement;
      //we add the class
      letter.classList.add("letter-animation");
      //we add a delay to each letter
      letter.style.animationDelay = `${i * 0.1}s`;
    }
  }, []);

  return (
    <div>
      <Parallax pages={3} ref={ref}>
        <ParallaxLayer offset={0} speed={0.5} factor={0.2}>
          <section className="LandingPage">
            <div className="LandingPage">
              <h3> Hei</h3>
              <div className="Name-center">
                <div className="letters-containers">
                  <div className="letter">H</div>
                  <div className="letter">i</div>
                  <div className="letter">_</div>
                  <div className="letter">I</div>
                  <div className="letter">'</div>
                  <div className="letter">m</div>
                  <div className="letter">&nbsp;</div>
                  <div className="letter">M</div>
                  <div className="letter">a</div>
                  <div className="letter">t</div>
                  <div className="letter">h</div>
                  <div className="letter">i</div>
                  <div className="letter">e</div>
                  <div className="letter">u</div>
                  <div className="letter">_</div>
                </div>
              </div>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} factor={1}>
          <section className="about-me" id="aboutme">
            <AboutMeComponent />
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} factor={1}>
          <section className="projects" id="projects">
            <App />
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default LandingPageComponent;
