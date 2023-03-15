import React from 'react';
import "./header.css";
import { useNavigate } from "react-router-dom";



export default function Header() {
const movePage = useNavigate();

function goMypage() {
  movePage("/mypage");
}

function goBoard() {
  movePage("/Board");
}
function goAdmin() {
  movePage("/Admin");
}
function goPageAA() {
  movePage("/PageAA");
}

  return (
    <header>
      <div>
        <nav className='NavMenu'>
          <button className='NavMenuTitle'>로그인</button>
          <button className='NavMenuTitle'>회원가입</button>
          <button onClick={goMypage} className='NavMenuTitle'>마이페이지 이동</button>
          <button onClick={goBoard} className='NavMenuTitle'>게시판</button>
          <button onClick={goAdmin} className='NavMenuTitle'>관리자페이지</button>
          <button onClick={goPageAA} className='NavMenuTitle'>설정 페이지 이동</button>
        </nav>

        <div>
          <h1 onClick='#' className='Title'>Pho_po</h1>
        </div>



      </div>
    </header>
  );
}