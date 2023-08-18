import React, { useState, useEffect } from "react";
import "./styles/LandingPage.scss";

function LandingPageComponent() {
  //once the component is mounted, we want to start the animation
  useEffect(() => {
    //get all the letters without using querySelectorAll (WITHOUT JQUERY) (jsquery is banned from this project)
    const letters = document.getElementsByClassName("letter");
    //get the number of letters
    const numberOfLetters = letters.length;
    //for each letter, we want to add a class that will trigger the animation
    for (let i = 0; i < numberOfLetters; i++) {
      console.log(letters[i]);
      if (i % 2 === 0) {
        letters[i].classList.add("letter-animation");
      } else {
        letters[i].classList.add("letter-animation-reverse");
      }
    }
  }, []);

  return (
    <div className="LandingPage">
      <div className="Name-center">
        <div className="letters-containers">
          <div className="letter">H</div>
          <div className="letter">i</div>
          <div className="letter">,</div>
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
  );
}

export default LandingPageComponent;
