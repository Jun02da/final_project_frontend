import React from "react";
import Post from "./components/Post";
import Header from "./components/Layout/postHeader";
// import { useLocation } from "react-router-dom";
// import "./css/MyPageHeader.css";

import "./css/Detail.css";
export default function Detail({ email }) {
  // const location = useLocation();
  // console.log(location.state["postAll"]);  ---> 한용재 수정 내용 (mypage에서 정보전달)
  // console.log(location.state["userAll"]);
  // console.log(location.state["location"]);
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
