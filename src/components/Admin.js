import React, { useState } from "react";
import { Layout, Menu } from "antd";
import AccountDelete from "./AccountDelete";
import Announcement from "./Announcement";
import ReportedPosts from "./ReportedPosts";
import ApexCharts from "./Charts/ApexCharts.js";
import {
  BarChartOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  SoundOutlined,
} from "@ant-design/icons";

const { Header, Footer, Content, Sider } = Layout;

function Admin() {
  const [showDelete, setShowDelete] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showChart, setShowChart] = useState(false);

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

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <h1 style={{ color: "#fff" }}>관리자 페이지</h1>
      </Header>
      <Content style={{ padding: "0 50px" }}>
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
            {showChart && <ApexCharts />}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
  );
}

export default Admin;
