import React, { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: <h1>Something went wrong!</h1>,
        post: {},
      };
    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        let responseJson = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: responseJson });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        {state.error ? state.error : null}
        <h4>{state.loading ? <>Loading...</> : state.post.title}</h4>
      </div>
    </div>
  );
};

export default DataFetchingTwo;
