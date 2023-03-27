import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import test from "./ImgCard.json"; //ImgCard.json <<<< 테스트용 데이터
import "../../css/MainHome.css"; //메인홈 이미지 카드에서 프로필 정보를 보기 위한 css


export default function MasonryImageList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const filteredData = selectedCategory === "all" ? test.itemData : test.itemData.filter(item => item.category === selectedCategory);
  const [showAllImages, setShowAllImages] = useState(false);
  const visibleImages = showAllImages ? filteredData : filteredData.slice(0, 30);

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

      <ImageList variant="masonry" cols={4} gap={10} >
        {/* ImgCard.json에서 데이터를 가져오는 부분 */}
        {filteredData.map((item) => (
          // hover-zoom 을 이용해서 이미지 위에 마우스를 올리면 이미지가 확대되는 효과
          <ImageListItem key={item.img} className="banner_img" >
            <Link to="mypage">
              <img
                src={`${item.img}?w=400&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                
              />
            </Link>
            {/* 이미지 카드에 마우스 올리면 닉네임이 보임 */}
            {/* 프로필 사진과 닉네임 */}
            <ul className="hover_text" style = {{listStyleType: 'none'}} >

              <li style ={{float: "left", margin: 8, marginLeft: -10}}>
                <Avatar alt="icon" src={item.profile} />
              </li>

              <li style ={{float: "left", marginTop : 8}}>
                <p>닉네임 나오는 곳</p>
              </li>

            </ul>

          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </>
  );
}
