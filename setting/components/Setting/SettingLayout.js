import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import setting_logo from "../../image/setting_logo01.png";

export function SettingLayout() {
  // 토글 기능을 사용한 활성화/비활성화
  const [toggleMenu_A, setToggleMenu_A] = useState(false);
  const [toggleMenu_B, setToggleMenu_B] = useState(false);
  const [toggleMenu_C, setToggleMenu_C] = useState(false);
  const [toggleMenu_D, setToggleMenu_D] = useState(false);
  // 토글을 각각 설정해줌
  // 예) A를 누르면 A만 토글
  const toggleChange_A = () => {
    setToggleMenu_A(!toggleMenu_A);
  };
  const toggleChange_B = () => {
    setToggleMenu_B(!toggleMenu_B);
  };
  const toggleChange_C = () => {
    setToggleMenu_C(!toggleMenu_C);
  };
  const toggleChange_D = () => {
    setToggleMenu_D(!toggleMenu_D);
  };
  return (
    <section>
      {/* 임시 로고 */}
      <NavLink to="/">
        <img src={setting_logo} width={300} />
      </NavLink>
      <aside>
        {/* 설정 사이드바 */}
        <header>Menu</header>
        <nav>
          {/* 설정 내부 검색창? */}
          <div>
            <input />
            <button>
              <SearchOutlined />
            </button>
          </div>
          {/* 
            설정 내부메뉴

            같은 범위안에서는 메뉴창이 닫히지 않는다
            예) Page_A_a => Page_A_b
            그러나 다른 범위로 넘어갈 경우 메뉴창이 닫힘
            예) Page_A_a => Page_B_a
          */}
          <ul>
            <li>
              <span onClick={toggleChange_A}>Page_A</span>
              {toggleMenu_A && (
                <ul>
                  <li>
                    <NavLink to="/Page_A/a">Page_A_a</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Page_A/b">Page_A_b</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Page_A/c">Page_A_c</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Page_A/d">Page_A_d</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <span onClick={toggleChange_B}>Page_B</span>
              {toggleMenu_B && (
                <ul>
                  <li>
                    <NavLink to="/Page_B/a">Page_B_a</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Page_B/b">Page_B_b</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Page_B/c">Page_B_c</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Page_B/d">Page_B_d</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <span onClick={toggleChange_C}>Page_C</span>
              {toggleMenu_C && (
                <ul>
                  <li>
                    <NavLink to="/Page_C/a">Page_C_a</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Page_C/b">Page_C_b</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Page_C/c">Page_C_c</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Page_C/d">Page_C_d</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <span onClick={toggleChange_D}>Page_D</span>
              {toggleMenu_D && (
                <ul>
                  <li>
                    <NavLink to="/Page_D/a">Page_D_a</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Page_D/b">Page_D_b</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Page_D/c">Page_D_c</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Page_D/d">Page_D_d</NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </aside>
    </section>
  );
}

export default SettingLayout;
