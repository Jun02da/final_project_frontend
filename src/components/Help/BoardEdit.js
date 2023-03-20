import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/HelpHeader.js";
import Footer from "../Layout/footer.js";

function BoardEdit() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title, content };
    setPosts([...posts, newPost]);
    setTitle("");
    setContent("");
  };

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  const handleEdit = (id) => {
    const postToEdit = posts.find((post) => post.id === id);
    setTitle(postToEdit.title);
    setContent(postToEdit.content);
    handleDelete(id);
  };
  const movePage = useNavigate();

  function goBoard() {
    movePage("/Board");
  }
  return (
    <>
      <Header />
      <button id="BoardWriteButton" onClick={goBoard}>
        목록
      </button>
      <div className="container">
        <h1>회원 게시판</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">글 제목:</label>
            <input
              id="title"
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="content">내용:</label>
            <textarea
              id="content"
              placeholder="내용"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit">글 올리기</button>
        </form>
        <hr />
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <button onClick={() => handleEdit(post.id)}>Edit</button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default BoardEdit;
