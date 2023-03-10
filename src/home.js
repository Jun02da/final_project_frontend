import { useNavigate } from "react-router-dom";
import Header from "./components/Layout/header";
import "./css/App.css";
import "./components/Layout/header.css";
import Footer from "./components/Layout/footer";
import Main from "./components/sidebar";

export default function Home() {
  const movePage = useNavigate();

  function goMypage() {
    movePage("/mypage");
  }

  function goLogin() {
    movePage("/login");
  }

  return (
    <div>
      <button onClick={goMypage}>마이페이지 이동</button>
      <button onClick={goLogin}>로그인 페이지 이동</button>
      <div className="header">
        <Header /> {/* src/Layout/Header에서 navbar를 불러옴 */}
      </div>
      <Main />
      <Footer />
    </div>
  );
}
