import Header from "../Layout/HelpHeader.js";
import Footer from "../../components/Layout/footer.js";
import AdviceImg from "../../image/Advice03.jpg";
import "../../css/Advice.css";

export default function Advice() {
  return (
    <div>
      <Header />
      <div id="AdviceContent">
        <img src={AdviceImg} alt="AdviceImg" />
      </div>
      <Footer />
    </div>
  );
}
