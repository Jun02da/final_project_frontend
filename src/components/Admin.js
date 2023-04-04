import React, { useState } from "react";
import { Layout, Menu } from "antd";
import AccountDelete from "./AccountDelete"; // AccountDelete 컴포넌트 import
import Announcement from "./Announcement";
import ReportedPosts from "./ReportedPosts";
import AdminChart from "./Charts/AdminChart.js";
import {
  BarChartOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  SoundOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const { Header, Footer, Content, Sider } = Layout;

export default function Admin() {
  const [showDelete, setShowDelete] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [adminUserAll, setAdminUserAll] = useState([]);
  const [adminPost, setAdminPost] = useState([]);

  const handleDeleteToggle = () => {
    setShowDelete(!showDelete);
  };
  const handleAnnouncementToggle = () => {
    setShowAnnouncement(!showAnnouncement);
  };
  const handleReportToggle = () => {
    setShowReport(!showReport);
  };
  const handleChartToggle = () => {
    setShowChart(!showChart);
    // admin 통계에서 사용할 데이터 관련
    axios
      .get("http://192.168.0.209:8090/user/all")
      .then((response) => {
        setAdminUserAll(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://192.168.0.209:8090/post")
      .then((response) => {
        setAdminPost(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleMenuItemClick = (event) => {
    const target = event.key;
    if (target === "delete") {
      handleDeleteToggle();
    } else if (target === "announcement") {
      handleAnnouncementToggle();
    } else if (target === "report") {
      handleReportToggle();
    } else if (target === "chart") {
      handleChartToggle();
    }
  };
  // Home으로 이동하는 함수
  const movePage = useNavigate();

  function goHome() {
    movePage("/");
  }

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <h1 style={{ color: "#fff" }}>관리자 페이지</h1>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        {/* Home 버튼 */}
        <button onClick={goHome}>
          <HomeOutlined />
          &nbsp;&nbsp;HOME
        </button>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[]}
              style={{ height: "100%" }}
              onClick={handleMenuItemClick}
            >
              {/* 메뉴 앞에 아이콘 추가 */}
              <Menu.Item key="delete">
                <DeleteOutlined />
                &nbsp;&nbsp;계정 삭제
              </Menu.Item>
              <Menu.Item key="announcement">
                <SoundOutlined />
                &nbsp;&nbsp;공지사항
              </Menu.Item>
              <Menu.Item key="report">
                <ExclamationCircleOutlined />
                &nbsp;&nbsp;신고 게시물 관리
              </Menu.Item>
              <Menu.Item key="chart">
                <BarChartOutlined />
                &nbsp;&nbsp;통계
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {showDelete && <AccountDelete />}
            {showAnnouncement && <Announcement />}
            {showReport && <ReportedPosts />}
            {showChart && (
              <AdminChart adminUserAll={adminUserAll} adminPost={adminPost} />
            )}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
}
