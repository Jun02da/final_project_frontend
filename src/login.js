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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleGoogleLogin = () => {
    const clientId =
      "714984022192-9rsjafb1p404qn867a0tgiv9l7bgegko.apps.googleusercontent.com"; // 발급받은 클라이언트 ID를 입력합니다.
    const redirectUri = "http://localhost:3000"; // 로그인 후 리다이렉트할 URL을 입력합니다.
    const scope = "email profile"; // 요청할 권한(scope)을 입력합니다.

    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
  };
  const handleLogin = () => {
    axios
      .post(
        "http://192.168.0.209:8090/login",
        { email, password },
        {
          withCredentials: true,
          crossDomain: true,
          credentials: "include",
        }
      )
      .then((response) => {
        const token = response.data;
        if (token) {
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setIsLoggedIn(true);
          alert("로그인 성공");
          handleCloseModal();
        } else {
          alert("로그인 실패");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("로그인 실패");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get("http://192.168.0.209:8090/user/me")
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setIsLoggedIn(false); // 로그아웃이 성공하면 isLoggedIn 값을 false로 설정
    alert("로그아웃되었습니다.");
  };
  const handleButtonClick = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      handleOpenModal();
    }
  };
  return (
    <div>
      <button onClick={handleButtonClick} className="NavMenuTitle">
        {isLoggedIn ? "로그아웃" : "로그인"}
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
        <button className="login_button" onClick={handleGoogleLogin}>
          구글로그인
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
