import React, { useState, useEffect } from "react";
import "./styles/LandingPage.css";

function LandingPageComponent() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setPosition((prevPosition) => {
        let newX = prevPosition.x + direction.x;
        let newY = prevPosition.y + direction.y;

        if (newX <= 0 || newX >= window.innerWidth - 200) {
          setDirection((prevDirection) => ({
            ...prevDirection,
            x: -prevDirection.x,
          }));
        }

        if (newY <= 0 || newY >= window.innerHeight - 50) {
          setDirection((prevDirection) => ({
            ...prevDirection,
            y: -prevDirection.y,
          }));
        }

        return { x: newX, y: newY };
      });
    }, 10);

    return () => clearInterval(animationInterval);
  }, [direction]);

  return (
    <div className="LandingPage">
      <div
        className="Name-center"
        style={{ left: position.x, top: position.y }}
      >
        <h1>Mathieu Ponton</h1>
      </div>
    </div>
  );
}

export default LandingPageComponent;
