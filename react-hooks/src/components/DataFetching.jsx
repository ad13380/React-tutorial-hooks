import React, { useState, useEffect } from "react";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState("");
  const [idFromButtonClick, setIdFromButtonClick] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`
      );
      const responseJson = await response.json();
      setPosts(responseJson);
    };
    fetchData();
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(postId);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setPostId(e.target.value)} />
      <button onClick={handleClick}>Get Post</button>
      <ul>
        {posts.length > 2
          ? posts.map((post) => <li key={post.id}>{post.title}</li>)
          : posts.title}
      </ul>
    </div>
  );
};

export default DataFetching;
