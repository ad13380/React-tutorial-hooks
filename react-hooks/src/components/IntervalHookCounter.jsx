import React, { useState, useEffect } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
    const interval = setInterval(handleCount, 1000);

    return () => clearInterval(interval);
  }, [count]);

  const handleCount = () => {
    console.log(count);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default IntervalHookCounter;
