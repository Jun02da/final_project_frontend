import React from "react";
import "./css/membership.css";

function MemberShip() {
  return (
    <form className="member">
      <h2>회원가입</h2>

      <div>
        <input
          type="email"
          name="email"
          placeholder="이메일 입력"
          required
          autoComplete="email"
        />
      </div>

      <div>
        <input type="password" id="password" placeholder="비밀번호 입력" />
      </div>

      <div>
        <input type="password" id="password1" placeholder="비밀번호 확인" />
      </div>

      <div>
        <input type="text" placeholder="사용자 이름" />
      </div>

      <div>
        <input type="tel" id="phone" placeholder="휴대폰번호" />
      </div>

      <br />

      <button type="submit">회원가입</button>
    </form>
  );
}

export default MemberShip;
