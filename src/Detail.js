import React from "react";
import Post from "./components/Post";
import Header from "./components/Layout/postHeader";
// import "./css/MyPageHeader.css";

import "./css/Detail.css";
export default function Detail({ email }) {
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
        <Post email={email} />
      </div>
    </div>
  );
}
