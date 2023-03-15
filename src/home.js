import { useNavigate } from "react-router-dom";
import Header from "./components/Layout/header";
import "./css/App.css";
import Footer from "./components/Layout/footer";
import Main from "./components/ImgCard";
import Login from "./login";

export default function Home() {
  const movePage = useNavigate();

  // function goMypage() {
  //   movePage("/mypage");
  // }

<<<<<<< HEAD
  // function goBoard() {
  //   movePage("/Board");
  // }
  // function goAdmin() {
  //   movePage("/Admin");
  // }
  // function goPageAA() {
  //   movePage("/PageAA");
  // }
=======
  function goBoard() {
    movePage("/Board");
  }
  function goAdmin() {
    movePage("/Admin");
  }
>>>>>>> fe2c560cd3c7766a667b3172097c2abb32a34e1b

  return (
    <div>
      {/* <button onClick={goMypage}>마이페이지 이동</button>
      <Login />
      <button onClick={goBoard}>게시판</button>
      <button onClick={goAdmin}>관리자페이지</button>
<<<<<<< HEAD
      <button onClick={goPageAA}>설정 페이지 이동</button> */}
      <div>
=======
      <div className="header">
>>>>>>> fe2c560cd3c7766a667b3172097c2abb32a34e1b
        <Header />
      </div>
      <Main />
      <Footer />
    </div>
  );
}
