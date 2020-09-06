import React, { useEffect, useState } from "react";

const DataFetchingOne = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        let responseJson = await response.json();
        setLoading(false);
        setPost(responseJson);
        setError("");
      } catch (err) {
        setLoading(false);
        setPost({});
        setError(<h4>Something went wrong!</h4>);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? error : null}
      <h4>{loading ? <>Loading...</> : post.title}</h4>
    </div>
  );
};

export default DataFetchingOne;
