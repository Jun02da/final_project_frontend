import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import "../../css/MainHome.css";
import axios from "axios";

export default function MasonryImageList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //post 테이블에서 이미지 주소와 카테고리 정보 가져오기
  useEffect(() => {
    axios.get("http://192.168.0.209:8090/post").then((response) => {
      const data = response.data;
      setPostData(data); // postData의 데이터 구조를 post 테이블의 데이터 구조로 변경
    });
  }, []);

  //user 테이블에서 프로필 사진과 닉네임 가져오기
  useEffect(() => {
    axios.get("http://192.168.0.209:8090/user/all").then((response) => {
      setUserData(response.data); // userData의 데이터 구조를 user 테이블의 데이터 구조로 변경
    });
  }, []);

  //카테고리로 사진 걸러서 받기
  const filteredData =
    selectedCategory === "all"
      ? postData
      : postData.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Box
        sx={{
          width: "auto",
          height: "auto",
          marginLeft: 15,
          marginRight: 15,
          marginTop: 10,
        }}
      >
        <div className="category">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category_box"
          >
            <option value="all">최신 인기 사진</option>
            <option value="Home">Home</option>
            <option value="IT">IT</option>
            <option value="Food">Food</option>
            <option value="Sports">Sports</option>
            <option value="Nature">Nature</option>
          </select>
        </div>

        <ImageList variant="masonry" cols={4} gap={10}>
          {filteredData.map((post, index) => { // postData -> post로 변수명 변경
            const user = userData.find((user) => user.email === post.email);
            const linkTo = `/mypage/${post.email}`;
            return (
              <ImageListItem key={index} className="banner_img">
                <Link to={linkTo}>
                  <img
                    src={`${post.image_url}?w=400&fit=crop&auto=format`}
                    alt={`Imagefile ${index}`}
                  />
                </Link>
               {/* 이미지 카드에 마우스 올리면 닉네임이 보임 */}
               {/* 프로필 사진과 닉네임 */}
               <ul className="hover_text" style={{ listStyleType: "none" }}>
                 {user.profile_image && (
                   <li style={{ float: "left", margin: 8, marginLeft: -10 }}>
                     <Avatar alt="icon" src={user.profile_image} />
                   </li>
                 )}
                 {user.nickname && (
                   <li style={{ float: "left", marginTop: 8 }}>
                     <p>{user.nickname}</p>
                   </li>
                 )}
               </ul>
             </ImageListItem>
           );
          })}
        </ImageList>
      </Box>
    </>
  );
}



