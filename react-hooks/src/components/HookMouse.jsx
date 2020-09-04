import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    setX(event.screenX);
    setY(event.screenY);
  };

  return (
    <div>
      <h4>Mouse position X: {x}</h4>
      <h4>Mouse position Y: {y}</h4>
    </div>
  );
};

export default HookMouse;
