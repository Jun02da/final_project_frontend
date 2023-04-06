import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import PostSide from "./components/PostSide";
import Header from "./components/Layout/postHeader";
import { useLocation } from "react-router-dom";
// import "./css/MyPageHeader.css";

import "./css/Detail.css";
export default function Detail() {
  const location = useLocation();
  // console.log(location.state["postAll"]);
  // console.log(location.state["userAll"]);
  // const userEmail = location.state?.userEmail;

  console.log(location.state);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .get("http://localhost:3000/data/userData.json")
  //       .then((response) => setUserData(response.data))
  //       .catch((error) => console.error(error));
  //   };
  //   fetchData();
  // }, []);

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
