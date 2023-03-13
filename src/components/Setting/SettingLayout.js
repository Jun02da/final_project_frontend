import React, { useState } from "react";
import {
  SearchOutlined,
  DownOutlined,
  UpOutlined,
  BarChartOutlined,
  LockOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import setting_logo from "../../image/setting_logo01.png";
import { useNavigate } from "react-router-dom";
import "../../css/setting.css";

export function SettingLayout() {
  // 토글 기능을 사용한 활성화/비활성화
  const [toggleMenuA, setToggleMenuA] = useState(false);
  const [toggleMenuB, setToggleMenuB] = useState(false);
  const [toggleMenuC, setToggleMenuC] = useState(false);
  const [toggleMenuD, setToggleMenuD] = useState(false);
  // 토글을 각각 설정해줌
  // 예) A를 누르면 A만 토글
  const toggleChangeA = () => {
    setToggleMenuA(!toggleMenuA);
  };
  const toggleChangeB = () => {
    setToggleMenuB(!toggleMenuB);
  };
  const toggleChangeC = () => {
    setToggleMenuC(!toggleMenuC);
  };
  const toggleChangeD = () => {
    setToggleMenuD(!toggleMenuD);
  };
  // 페이지 이동함수
  const movePage = useNavigate();

  function goPageHome() {
    movePage("/");
  }
  function goPageAA() {
    movePage("/PageAA");
  }
  function goPageAB() {
    movePage("/PageAB");
  }
  function goPageAC() {
    movePage("/PageAC");
  }
  function goPageAD() {
    movePage("/PageAD");
  }
  function goPageBA() {
    movePage("/PageBA");
  }
  function goPageBB() {
    movePage("/PageBB");
  }
  function goPageBC() {
    movePage("/PageBC");
  }
  function goPageBD() {
    movePage("/PageBD");
  }
  function goPageCA() {
    movePage("/PageCA");
  }
  function goPageCB() {
    movePage("/PageCB");
  }
  function goPageCC() {
    movePage("/PageCC");
  }
  function goPageCD() {
    movePage("/PageCD");
  }
  function goPageDA() {
    movePage("/PageDA");
  }
  function goPageDB() {
    movePage("/PageDB");
  }
  function goPageDC() {
    movePage("/PageDC");
  }
  function goPageDD() {
    movePage("/PageDD");
  }
  return (
    <section id="settingLayout">
      {/* 
        임시 로고
        로고 클릭시 홈으로 이동  
      */}
      <div>
        <div onClick={goPageHome}>
          <img src={setting_logo} width={100} />
        </div>
      </div>
      <hr />
      <div>
        <div>
          {/* 설정 내부 검색창? */}
          <input />
          <button>
            <SearchOutlined />
          </button>
        </div>
        {/* 설정 사이드바 */}
        <ul id="settingSidebar">
          <li>
            <span onClick={toggleChangeA}>
              <BarChartOutlined />
              &nbsp; PageA &nbsp;
              {/* 상태에 따라서 화살표 아이콘 변화 */}
              {toggleMenuA ? <UpOutlined /> : <DownOutlined />}
            </span>
            {/* 
                설정 내부메뉴

                메뉴창만 조작시 메뉴창이 닫히지 않는다
                현재 페이지를 클릭할 시 이벤트 발생 X
                그러나 다른 범위로 넘어갈 경우 메뉴창이 닫힘
                예) PageAA=> PageAB
              */}
            {toggleMenuA && (
              <ul id="settingSidebarDetail">
                <li>
                  <p onClick={goPageAA}>PageAA</p>
                </li>
                <li>
                  <p onClick={goPageAB}>PageAB</p>
                </li>
                <li>
                  <p onClick={goPageAC}>PageAC</p>
                </li>
                <li>
                  <p onClick={goPageAD}>PageAD</p>
                </li>
              </ul>
            )}
          </li>
          <li>
            <span onClick={toggleChangeB}>
              <UserOutlined />
              &nbsp; PageB &nbsp;
              {toggleMenuB ? <UpOutlined /> : <DownOutlined />}
            </span>
            {toggleMenuB && (
              <ul id="settingSidebarDetail">
                <li>
                  <p onClick={goPageBA}>PageBA</p>
                </li>
                <li>
                  <p onClick={goPageBB}>PageBB</p>
                </li>
                <li>
                  <p onClick={goPageBC}>PageBC</p>
                </li>
                <li>
                  <p onClick={goPageBD}>PageBD</p>
                </li>
              </ul>
            )}
          </li>
          <li>
            <span onClick={toggleChangeC}>
              <LockOutlined />
              &nbsp; PageC &nbsp;
              {toggleMenuC ? <UpOutlined /> : <DownOutlined />}
            </span>
            {toggleMenuC && (
              <ul id="settingSidebarDetail">
                <li>
                  <p onClick={goPageCA}>PageCA</p>
                </li>
                <li>
                  <p onClick={goPageCB}>PageCB</p>
                </li>
                <li>
                  <p onClick={goPageCC}>PageCC</p>
                </li>
                <li>
                  <p onClick={goPageCD}>PageCD</p>
                </li>
              </ul>
            )}
          </li>
          <li>
            <span onClick={toggleChangeD}>
              <InfoCircleOutlined />
              &nbsp; PageD &nbsp;
              {toggleMenuD ? <UpOutlined /> : <DownOutlined />}
            </span>
            {toggleMenuD && (
              <ul id="settingSidebarDetail">
                <li>
                  <p onClick={goPageDA}>PageDA</p>
                </li>
                <li>
                  <p onClick={goPageDB}>PageDB</p>
                </li>
                <li>
                  <p onClick={goPageDC}>PageDC</p>
                </li>
                <li>
                  <p onClick={goPageDD}>PageDD</p>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SettingLayout;
