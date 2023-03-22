import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import test from "./ImgCard.json"; //ImgCard.json <<<< 테스트용 데이터
import "../../css/MainHome.css"; //메인홈 이미지 카드에서 프로필 정보를 보기 위한 css




export default function MasonryImageList() {
  return (
    //  이미지카드 디자인 틀
    <Box
      sx={{
        width: "auto",
        height: "auto",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
      }}
    >
      <ImageList variant="masonry" cols={4} gap={10}>
        {/* ImgCard.json에서 데이터를 가져오는 부분 */}
        {test.itemData.map((item) => (
          // hover-zoom 을 이용해서 이미지 위에 마우스를 올리면 이미지가 확대되는 효과
          <ImageListItem key={item.img} className="banner_img">
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
                <Avatar alt="icon" src={item.pro} />
              </li>

              <li style ={{float: "left", marginTop : 8}}>
                <p>닉네임 나오는 곳</p>
              </li>

            </ul>

          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
