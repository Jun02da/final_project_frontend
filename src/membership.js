import React, { useState } from "react";
import "./css/membership.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Login from "./login";

export default function MemberShip() {
  const [Memberemail, setMemberEmail] = useState("");
  const [Memberpassword, setMemberPassword] = useState("");
  const [Memberpassword1, setMemberPassword1] = useState("");
  const [Username, setUserName] = useState("");
  const [Userphonenumber, setUserPhoneNumber] = useState("");
  const [Gender, setGender] = useState("");

  const movePage = useNavigate();

  function goHome() {
    movePage("/");
  }

  const onMemberemail = (e) => {
    setMemberEmail(e.target.value);
  };

  const onMemberpassword = (e) => {
    setMemberPassword(e.target.value);
  };

  const onMemberpassword1 = (e) => {
    setMemberPassword1(e.target.value);
  };

  const onUsername = (e) => {
    setUserName(e.target.value);
  };

  const onUserphonenumber = (e) => {
    setUserPhoneNumber(e.target.value);
  };
  const onGenderChange = (e) => {
    const { value } = e.target;
    setGender(value);
  };
  const passwordValid = () => {
    if (Memberpassword !== Memberpassword1) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }
    return true;
  };

  const onSubmit1 = async (e) => {
    e.preventDefault();

    if (!passwordValid()) {
      return;
    }

    try {
      const response = await axios.post("http://192.168.0.209:8090/signup", {
        email: Memberemail,
        password: Memberpassword,
        nickname: Username,
        phone: Userphonenumber,
        gender: Gender,
      });

      if (response.status === 201) {
        goHome();
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert(`이미 사용 중인 이메일 주소입니다. `);
      } else {
        alert(`회원가입 중 오류가 발생했습니다. `);
      }
    }
  };

  return (
    <div className="membership_page">
      {/* <nav className="NavMenu">
        <Login />
        <button onClick={goHome} className="NavMenuTitle">
          홈
        </button>
      </nav> */}

      <form className="membership_form" onSubmit={onSubmit1}>
        <h1 onClick={goHome}>P H O P O</h1>
        <h2>회원가입</h2>

        <div>
          <input
            className="membership_form_input"
            type="email"
            name="email"
            value={Memberemail}
            required
            placeholder="이메일 입력"
            onChange={onMemberemail}
          />
        </div>

        <div className="password-input">
          <input
            className="membership_form_input"
            type="password"
            value={Memberpassword}
            id="password"
            required
            pattern=".{8,}"
            title="최소 8자 이상 입력하세요."
            placeholder="비밀번호 입력"
            onChange={onMemberpassword}
          />
        </div>

        <div>
          <input
            className="membership_form_input"
            type="password"
            value={Memberpassword1}
            name="password1"
            required
            pattern=".{8,}"
            title="최소 8자 이상 입력하세요."
            placeholder="비밀번호 확인"
            onChange={onMemberpassword1}
          />
        </div>

        <div>
          <input
            className="membership_form_input"
            type="text"
            value={Username}
            name="nickname"
            required
            placeholder="사용자 이름"
            onChange={onUsername}
          />
        </div>

        <div>
          <input
            className="membership_form_input"
            type="tel"
            value={Userphonenumber}
            name="phone"
            required
            placeholder="휴대폰번호"
            onChange={onUserphonenumber}
          />
        </div>
        <div className="gender-input">
          <label for="gender-M">
            <input
              id="gender-M"
              type="radio"
              name="gender"
              value="male"
              checked={Gender === "male"}
              onChange={onGenderChange}
            />
            남성
          </label>
          &nbsp; &nbsp;
          <label for="gender-F">
            <input
              id="gender-F"
              type="radio"
              name="gender"
              value="female"
              checked={Gender === "female"}
              onChange={onGenderChange}
            />
            여성
          </label>
        </div>

        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}
