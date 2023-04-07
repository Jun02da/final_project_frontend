import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./css/login.css";
import "./css/MainHeader.css";
import axios from "axios";

Modal.setAppElement("#root");

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rememberEmail, setRememberEmail] = useState(false); // 이메일 기억하기 상태

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

  const handleRememberEmailChange = (event) => {
    if (!event.target.checked) {
      setPassword("");
    }
    setRememberEmail(event.target.checked);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get("http://192.168.0.209:8090/user/me")
        // .then((response) => {
        //   console.log(response.data);
        // })
        .catch((error) => {
          console.log(error);
        });
    }
    setIsLoggedIn(!!token); // isLoggedIn 상태를 localStorage에서 값을 불러와서 업데이트합니다
    const storedEmail = localStorage.getItem("rememberedEmail"); // 로컬 스토리지에서 이메일 값을 불러와서
    if (storedEmail) {
      setRememberEmail(true); // 상태에 저장합니다.
      setEmail(storedEmail); // 이메일 입력란에 불러온 값을 넣어줍니다.
    }
  }, []);

  useEffect(() => {
    if (rememberEmail) {
      localStorage.setItem("rememberedEmail", email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
  }, [rememberEmail, email]);

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
          setIsLoggedIn(true);
          handleCloseModal();
          setIsModalOpen(false);
          if (email === "admin") {
            window.location.href = "/Admin";
          } else {
            window.location.reload(); // 회원가입 버튼 숨기기 위해 페이지 다시 로드
          }
        } else {
          delete axios.defaults.headers.common["Authorization"];
          alert("토큰 받기 실패");
        }
      })
      .catch((error) => {
        console.error(error);
        setPassword("");
        alert("로그인에 실패했습니다.");
      });
  };
  const movePage = useNavigate();
  function goHome() {
    movePage("/");
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setIsLoggedIn(false); // 로그아웃이 성공하면 isLoggedIn 값을 false로 설정
    alert("로그아웃되었습니다.");
    // window.location.reload();
    goHome(); // 홈으로 돌아가도록 설정
    window.location.reload();
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
        closeTimeoutMS={0}
        style={{
          overlay: { zIndex: 1000 },
          content: { zIndex: 1000 },
        }}
      >
        <button className="login_close_button" onClick={handleCloseModal}>
          X
        </button>
        <h2 className="login">로그인</h2>
        {errorMessage && <div className="login_error">{errorMessage}</div>}
        <div className="login_form">
          <input
            type="email"
            placeholder="이메일 입력"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="login_form">
          <input
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="remember-email-checkbox"
            checked={rememberEmail}
            onChange={handleRememberEmailChange}
          />
          <label className="RememberEmail" htmlFor="remember-email-checkbox">
            이메일 유지
          </label>
        </div>
        <br />
        <button className="login_button" onClick={handleLogin}>
          로그인
        </button>
        <br />
        <div className="login_button_container">
          <div className="Membership_Text">
            아직 Phopo 계정이 없으신가요?&nbsp;
            <label
              className="MemberShip_Btn"
              onClick={() => (window.location.href = "/MemberShip")}
            >
              지금 가입하기
            </label>
          </div>
        </div>
        <br />
      </Modal>
    </div>
  );
}
