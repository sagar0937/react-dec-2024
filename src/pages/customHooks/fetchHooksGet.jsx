import React from "react";
import useFetch from "../../hooks/useFetch";

const GetDataExample = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "GET",
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      {data &&
        data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default GetDataExample;
