import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import test from "./ImgCard.json"; //ImgCard.json <<<< 테스트용 데이터
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function App() {
  const { collapseSidebar } = useProSidebar();

  //여기서부터 좌측 사이드바 부분
  return (
    <div id="app" style={({ height: "auto" }, { display: "flex" })}>
      <Sidebar
        style={{ height: "auto" }}
        backgroundColor="rgb(0, 0, 0, 0)"
        breakPoint="sm"
        transitionDuration={400}
      >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>

      {/* 여기서부터는 메인 이미지 카드부분 */}
      <main>
        <Box
          sx={{
            width: "auto",
            height: "auto",
            marginLeft: 35,
            marginRight: 20,
            marginTop: 10,
          }}
        >
          <ImageList variant="masonry" cols={3} gap={8}>
            {test.itemData.map((item) => (
              <ImageListItem key={item.img} className="bg-image hover-zoom">
                <Link to="detail">
                  <img
                    src={`${item.img}?w=400&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                  />
                </Link>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </main>
    </div>
  );
}

export default App;
