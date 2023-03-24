import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./css/login.css";
import "./css/MainHeader.css";
import axios from "axios";

Modal.setAppElement("#root");

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
    axios
      .get("http://192.168.0.209:8090/user/me")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLogin = () => {
    axios
      .post(
        "http://192.168.0.209:8090/login",
        { email, password },
        { withCredentials: true, crossDomain: true, credentials: "include" }
      )
      .then((response) => {
        const token = response.data;
        alert("로그인 성공.");
        if (token) {
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          alert("토큰 받았습니다.");

          window.location.href = "/";
        } else {
          delete axios.defaults.headers.common["Authorization"];
          alert("토큰 받기 실패");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("로그인에 실패했습니다.");
      });
  };

  return (
    <div>
      <button onClick={handleOpenModal} className="NavMenuTitle">
        로그인
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        className="login_modal"
      >
        <h2 className="login">로그인</h2>
        {errorMessage && <div className="login_error">{errorMessage}</div>}
        <div className="login_form">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            placeholder="이메일 입력"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="login_form">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <br />
        <button className="login_button" onClick={handleLogin}>
          로그인
        </button>
        <br />
        <button onClick={handleCloseModal} className="login_button">
          닫기
        </button>
        <br />
        <button
          onClick={() => (window.location.href = "/MemberShip")}
          className="login_button"
        >
          회원가입
        </button>
        <br />
      </Modal>
    </div>
  );
}
