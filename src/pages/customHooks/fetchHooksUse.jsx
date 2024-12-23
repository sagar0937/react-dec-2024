import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";

const PostDataExample = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { data, error, loading, fetchData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {data && (
        <p>
          Post created with ID: {data.id}--{data.body}
        </p>
      )}
    </div>
  );
};

export default PostDataExample;
