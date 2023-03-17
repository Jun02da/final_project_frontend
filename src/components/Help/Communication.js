import Header from "../Layout/HelpHeader.js";
import Footer from "../Layout/footer.js";
import "../../css/Communication.css";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Communication() {
  const [inputs, setInputs] = useState({
    CommunicationName: "",
    CommunicationEmail: "",
    CommunicationMessage: "",
  });
  // 비구조화 할당을 통해 값 추출
  const { CommunicationName, CommunicationEmail, CommunicationMessage } =
    inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // e.target에서 name과 value를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  // 작성한 내용을 보내는 함수
  // emailjs를 사용해서 설정한 이메일로 전송
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_phopo",
        "template_2ztncua",
        form.current,
        "AaU22vcHNn0UWWLTu"
      )
      .then(
        (result) => {
          alert("전송이 완료되었습니다");
          console.log(result.text);
          setInputs({
            CommunicationName: "",
            CommunicationEmail: "",
            CommunicationMessage: "",
          });
        },
        (error) => {
          alert("전송을 실패했습니다");
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Header />
      <div id="Communication">
        <div id="CommunicationReach">
          <h3>Reach Me</h3>
          <hr />
          <div id="CommunicationReachContent">
            <div id="CommunicationReachDetail">
              <EnvironmentOutlined
                style={{ fontSize: "50px", color: "#025ce2" }}
              />
              <div>based in Seoul, S.Korea</div>
            </div>
            <div id="CommunicationReachDetail">
              <PhoneOutlined style={{ fontSize: "50px", color: "#025ce2" }} />
              <div>Tel: 010-1234-5678</div>
            </div>
            <div id="CommunicationReachDetail">
              <MailOutlined style={{ fontSize: "50px", color: "#025ce2" }} />
              <div>Test@naver.com</div>
            </div>
            <div id="CommunicationReachDetail">
              <CommentOutlined style={{ fontSize: "50px", color: "#025ce2" }} />
              <div>카카오톡ID: test1234</div>
            </div>
          </div>
        </div>
        <div id="CommunicationMail">
          <h3>Or Mail Me</h3>
          <hr />
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input
                name="CommunicationName"
                onChange={onChange}
                value={CommunicationName}
                id="CommunicationName"
                placeholder=" Name"
                required
              />
            </div>
            <div>
              <input
                name="CommunicationEmail"
                onChange={onChange}
                value={CommunicationEmail}
                id="CommunicationEmail"
                placeholder=" Email"
                required
              />
            </div>
            <div>
              <textarea
                name="CommunicationMessage"
                onChange={onChange}
                value={CommunicationMessage}
                id="CommunicationMessage"
                placeholder=" Message"
                required
              />
            </div>
            <button type="submit" id="CommunicationSendButton">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
