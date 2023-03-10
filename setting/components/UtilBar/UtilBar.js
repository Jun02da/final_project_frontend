import React, { useState } from "react";
import { Menu, Button } from "antd";
import { MenuOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function UtilBar() {
  // 토글 기능을 사용한 메뉴 비활성화/활성화
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBar, setToggleBar] = useState(true);

  const toggleChange = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };

  return (
    <div>
      {/* 유틸 버튼 */}
      <Button
        type="primary"
        onClick={toggleChange}
        style={{ marginBottom: 16 }}
      >
        {/* 상태에 따라서 변화 */}
        {toggleBar ? <MenuOutlined /> : <MenuFoldOutlined />}
      </Button>
      {/* 버튼 클릭 후 활성화된 유틸메뉴들 */}
      {toggleMenu && (
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={toggleBar}
          onClick={onMenuClick}
        >
          {/* 추후에 경로 지정해야 함 */}
          <Menu.Item>
            <Link to="/Page_A/a">설정</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">고객센터</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">마이페이지</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">회원가입</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">로그인</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
}

export default UtilBar;
