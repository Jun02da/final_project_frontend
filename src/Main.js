import { React, useState, useEffect } from "react";
import "./css/Main.css";
import Feed from "./components/Feed";

export default function Main() {
  const [commentData, setCommentData] = useState([]);
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/commentData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCommentData(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/data/feedData.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setFeedData(data);
      });
  }, []);

  return (
    <div className="main">
      <div className="body">
        <Feed
          feedData={feedData}
          commentData={commentData}
          setCommentData={setCommentData}
        />
      </div>
    </div>
  );
}
