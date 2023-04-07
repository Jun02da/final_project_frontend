import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import PostSide from "./components/PostSide";
import Header from "./components/Layout/postHeader";
import { useLocation } from "react-router-dom";
import "./css/Detail.css";

export default function Detail() {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="main">
      <div className="body">
        <Header />
        <PostSide user={location.state} />
        <Post user={location.state} />
      </div>
    </div>
  );
}
