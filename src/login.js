import React, { useState } from "react";
import Modal from "react-modal";
import "./css/login.css";
import "./components/Layout/header.css";


Modal.setAppElement("#root");

export default function Login() {
  const [showModal1, setShowModal1] = useState(false);

  const handleOpenModal1 = () => {
    setShowModal1(true);
  };
  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal1} className='NavMenuTitle'>로그인</button>
      <Modal
        isOpen={showModal1}
        onRequestClose={handleCloseModal1}
        className="custom-modal"
      >
        <h2 className="login">로그인</h2>
        <div className="login-form">
          <label htmlFor="email">이메일</label>
          <input type="email" placeholder="이메일 입력" />
        </div>
        <div className="login-form">
          <label htmlFor="password">비밀번호</label>
          <input type="password" placeholder="비밀번호 입력" />
        </div>
        <br />
        <button className="but">로그인</button>
        <br />
        <button onClick={handleCloseModal1} className="but">
          닫기
        </button>
        <br />
        <button
          onClick={() => (window.location.href = "/MemberShip")}
          className="but"
        >
          회원가입
        </button>
        <br />
      </Modal>
      <button onClick={() => (window.location.href = "/MemberShip")} className='NavMenuTitle'>
        회원가입
      </button>
    </div>
  );
}
