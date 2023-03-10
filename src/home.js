import { useNavigate } from "react-router-dom";
import Header from "./components/Layout/header";
import "./css/App.css";
import "./components/Layout/header.css";
import Footer from "./components/Layout/footer";
import Main from "./components/sidebar";
import Login from "./login";

export default function Home() {
  const movePage = useNavigate();

  function goMypage() {
    movePage("/mypage");
  }

  function goManager() {
    movePage("/manager");
  }

  return (
    <div>
      <button onClick={goMypage}>마이페이지 이동</button>
      <Login />
      <button onClick={goManager}>관리자 페이지 이동</button>
      <div className="header">
        <Header />
      </div>
      <Main />
      <Footer />
    </div>
  );
}
