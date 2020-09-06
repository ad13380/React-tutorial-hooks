import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return {
        ...state,
        firstCounter: state.firstCounter + action.value,
      };
    case "decrement1":
      return {
        ...state,
        firstCounter: state.firstCounter - action.value,
      };
    case "increment2":
      return {
        ...state,
        secondCounter: state.secondCounter + action.value,
      };
    case "decrement2":
      return {
        ...state,
        secondCounter: state.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>Counter 1: {count.firstCounter}</h4>
      <h4>Counter 2: {count.secondCounter}</h4>
      <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
        Increment Counter 1
      </button>
      <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
        Decrement Counter 1
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement Counter 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterTwo;
