import Header from "../Layout/MyPageHeader";
import Footer from "../Layout/footer";
import "../../css/Contact.css";
import { SendOutlined } from "@ant-design/icons";
import React, { useState } from "react";

export default function Contact() {
  // 임시 사진
  const image = "https://pbs.twimg.com/media/DumtB0bUwAA2k7U.jpg";

  const [inputs, setInputs] = useState({
    ContactInputName: "",
    ContactInputEmail: "",
    ContactTextareaMessage: "",
  });
  // 비구조화 할당을 통해 값 추출
  const { ContactInputName, ContactInputEmail, ContactTextareaMessage } =
    inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // e.target에서 name과 value를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  // 작성한 내용을 보내는 함수
  const sendContent = () => {
    // 임시로 콘솔에 찍음
    console.log(
      JSON.stringify(
        "Name: " +
          ContactInputName +
          ", Email: " +
          ContactInputEmail +
          ", Message: " +
          ContactTextareaMessage
      )
    );
    // 사용자가 볼 알림창
    alert("전송이 완료되었습니다");
    // 자동 초기화
    setInputs({
      ContactInputName: "",
      ContactInputEmail: "",
      ContactTextareaMessage: "",
    });
  };

  return (
    <div>
      <Header />
      <div id="ContactContent">
        <img src={image} alt="zz" id="ContactImage" />
        <div id="ContactText">
          <h3>Have a Question?</h3>
          <hr />
          <input
            name="ContactInputName"
            onChange={onChange}
            value={ContactInputName}
            id="ContactInputName"
            placeholder=" Name"
          />
          <input
            name="ContactInputEmail"
            onChange={onChange}
            value={ContactInputEmail}
            id="ContactInputEmail"
            placeholder=" Email"
          />
          <textarea
            name="ContactTextareaMessage"
            onChange={onChange}
            value={ContactTextareaMessage}
            id="ContactTextareaMessage"
            placeholder=" Message"
          ></textarea>
          <SendOutlined
            style={{ fontSize: "32px", color: "#08c" }}
            onClick={sendContent}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
