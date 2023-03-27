import Header from "../Layout/HelpHeader.js";
import Footer from "../Layout/footer.js";
import { Collapse } from "antd";
import "../../css/FAQ.css";

// 자주 묻는 질문을 추후에 작성하면 됨
const { Panel } = Collapse;
// 클릭하면 나오는 내용 부분
const text1 = `
PHOPO는 다양한 작가님들과 사진들을 제공합니다.
회원가입 및 로그인을 진행하신 후 다양한 사진들을 만나보세요 
`;
const text2 = `
PHOPO는 이메일과 핸드폰을 보유하신 고객님의 경우 누구나 회원가입이 가능합니다.
`;
const text3 = `
문의 페이지에 명시된 정보를 확인하시어 이용에 차질 없으시길 바람니다
`;
const text4 = `
자녀의 앱 이용에 관심을 가져 주셔서 감사합니다.
하지만 부모님에게 계정 액세스를 허용하거나 부모님의 요청에 따라 계정에 조치를 취할 수는 없습니다.
개인정보보호법에 따라 일반적으로 계정 소유자가 아닌 사람에게 무단 액세스를 허용하는 것은 금지되어 있습니다.
`;
const text5 = `
PHOPO에서 문제가 발생한 경우 다음 문제 해결 단계를 따르세요.
최신 버전의 운영 체제와 앱이 실행되고 있는지 확인하세요.
기기를 다시 시작해도 문제가 해결되지 않는 경우 인터넷 연결을 확인해 보세요.
이 단계로도 문제가 해결되지 않는다면 고객센터에 문의하시어 PHOPO에서 버그나 기능 오류를 조사할 수 있도록 협조해 주세요
`;
const text6 = `
사소한 갈등의 경우 한발 물러나서 게시물의 문맥을 파악해 보시기 바랍니다.
만약 언쟁이나 악용 사례가 도를 넘어서 회원님이나 회원님의 지인이 위급한 상황에 있다면 즉시 현지 사법당국에 연락하시기 바랍니다.
`;
const text7 = `
PHOPO는 학습을 목적으로 제작되어 수익화 기능을 제공하지 않습니다.
`;
const text8 = `
아쉽게도 발송 취소가 불가합니다.
하지만 발송하신 메일은 PHOPO 관리자에게만 전송되며 개인정보보호법에 따라 무단으로 사용되지 않습니다.
`;
const text9 = `
아니요. 이는 사실이 아닙니다!
`;
// 자주 묻는 질문 내용
const FAQContent = () => (
  <Collapse accordion size="large">
    <Panel header="PHOPO 사용을 시작하려면 어떻게 해야 합니까?" key="1">
      <p>{text1}</p>
    </Panel>
    <Panel header="회원가입은 누구나 할 수 있나요?" key="2">
      <p>{text2}</p>
    </Panel>
    <Panel header="아이디/비밀번호를 분실했어요 어떻게 하나요?" key="3">
      <p>{text3}</p>
    </Panel>
    <Panel header="내 청소년 자녀의 계정에 액세스할 수 있나요?" key="4">
      <p>{text4}</p>
    </Panel>
    <Panel header="PHOPO 이용에 문제가 발생했습니다" key="5">
      <p>{text5}</p>
    </Panel>
    <Panel header="PHOPO에서 갈등 또는 악용 사례에 대처하려면?" key="6">
      <p>{text6}</p>
    </Panel>
    <Panel
      header="PHOPO의 수익화 기능은 어디서 자세히 알아볼 수 있나요?"
      key="7"
    >
      <p>{text7}</p>
    </Panel>
    <Panel header="문의 페이지에서 발송한 메일을 취소할 수 있나요?" key="8">
      <p>{text8}</p>
    </Panel>
    <Panel
      header="게시물에서 초반 30분 동안 공감을 많이 받을 경우 이러한 게시물의 순위가 더 높아지나요?"
      key="9"
    >
      <p>{text9}</p>
    </Panel>
  </Collapse>
);
export default function FAQ() {
  return (
    <div>
      <Header />
      <div id="FAQContentOutter">
        <h3>자주 묻는 질문</h3>
        <hr />
        <FAQContent />
      </div>
      <br />
      <Footer />
    </div>
  );
}
