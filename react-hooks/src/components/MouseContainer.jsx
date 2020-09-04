import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, isDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => isDisplay(!display)}>Toggle Display</button>
      <h4>Display: {display.toString()}</h4>
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
