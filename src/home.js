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

  function goBoard() {
    movePage("/Board");
  }
  function goAdmin() {
    movePage("/Admin");
  }

  return (
    <div>
      <button onClick={goMypage}>마이페이지 이동</button>
      <Login />
      <button onClick={goBoard}>게시판</button>
      <button onClick={goAdmin}>관리자페이지</button>
      <div className="header">
        <Header />
      </div>
      <Main />
      <Footer />
    </div>
  );
}
