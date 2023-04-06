import "../../css/Communication.css";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
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
  // 작성한 내용을 emailjs를 사용해서 미리 설정한 이메일로 보내는 함수
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // emailjs에서 생성하여 받은 고유값
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
            // 전송 후 빈칸으로 초기화
            CommunicationName: "",
            CommunicationEmail: "",
            CommunicationMessage: "",
          });
        },
        (error) => {
          // 실패할 경우
          alert("전송을 실패했습니다");
          console.log(error.text);
        }
      );
  };
  return (
    <div id="Communication">
      {/* 문의 안내 부분 */}
      <div id="CommunicationReach">
        <h3>Contact</h3>
        <hr />
        <div id="CommunicationReachContent">
          <div id="CommunicationReachDetail">
            <div>
              <EnvironmentOutlined
                style={{ fontSize: "36px", color: "#025ce2" }}
              />
            </div>
            <div>
              <p>Kosmo 2강의실</p>
            </div>
          </div>
          <div id="CommunicationReachDetail">
            <div>
              <PhoneOutlined style={{ fontSize: "36px", color: "#025ce2" }} />
            </div>
            <div>
              <p>02-321-4567</p>
            </div>
          </div>
          <div id="CommunicationReachDetail">
            <div>
              <MailOutlined style={{ fontSize: "36px", color: "#025ce2" }} />
            </div>
            <div>
              <p>Kosmo@example.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* 이메일 전송 부분 */}
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
          {/* 전송 버튼 
                input창들이 빈칸일 경우 알려줌
            */}
          <button type="submit" id="CommunicationSendButton">
            Send
          </button>
          {/* 주의사항 토글 */}
          <span
            class="tooltip-toggle"
            aria-label="담당자에게 전송되는 메일입니다. 개인정보작성에 주의하세요!"
            tabindex="0"
          >
            <svg viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
              <g fill="#ED3E44" fill-rule="evenodd">
                <path d="M13.5 27C20.956 27 27 20.956 27 13.5S20.956 0 13.5 0 0 6.044 0 13.5 6.044 27 13.5 27zm0-2C7.15 25 2 19.85 2 13.5S7.15 2 13.5 2 25 7.15 25 13.5 19.85 25 13.5 25z" />
                <path d="M12.05 7.64c0-.228.04-.423.12-.585.077-.163.185-.295.32-.397.138-.102.298-.177.48-.227.184-.048.383-.073.598-.073.203 0 .398.025.584.074.186.05.35.126.488.228.14.102.252.234.336.397.084.162.127.357.127.584 0 .22-.043.412-.127.574-.084.163-.196.297-.336.4-.14.106-.302.185-.488.237-.186.053-.38.08-.584.08-.215 0-.414-.027-.597-.08-.182-.05-.342-.13-.48-.235-.135-.104-.243-.238-.32-.4-.08-.163-.12-.355-.12-.576zm-1.02 11.517c.134 0 .275-.013.424-.04.148-.025.284-.08.41-.16.124-.082.23-.198.313-.35.085-.15.127-.354.127-.61v-5.423c0-.238-.042-.43-.127-.57-.084-.144-.19-.254-.318-.332-.13-.08-.267-.13-.415-.153-.148-.024-.286-.036-.414-.036h-.21v-.95h4.195v7.463c0 .256.043.46.127.61.084.152.19.268.314.35.125.08.263.135.414.16.15.027.29.04.418.04h.21v.95H10.82v-.95h.21z" />
              </g>
            </svg>
          </span>
        </form>
      </div>
    </div>
  );
}
