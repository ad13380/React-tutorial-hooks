import React, { useState, useEffect, useRef } from "react";

const HookTimer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [count]);

  return (
    <div>
      Hook counter: {count}
      <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
    </div>
  );
};

export default HookTimer;
