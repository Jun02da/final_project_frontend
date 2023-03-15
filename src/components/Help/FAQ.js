import HelpHeader from "./HelpHeader";
import Footer from "../../components/Layout/footer.js";
import { Collapse } from "antd";

const { Panel } = Collapse;

const text1 = `
  대답 1
`;
const text2 = `
  대답 2
`;
const text3 = `
  대답 3
`;
const AdviceContent = () => (
  <Collapse accordion>
    <Panel header="질문 1" key="1">
      <p>{text1}</p>
    </Panel>
    <Panel header="질문 2" key="2">
      <p>{text2}</p>
    </Panel>
    <Panel header="질문 3" key="3">
      <p>{text3}</p>
    </Panel>
  </Collapse>
);
export default function FAQ() {
  return (
    <div>
      <HelpHeader />
      <div>
        <AdviceContent />
      </div>
      <Footer />
    </div>
  );
}
