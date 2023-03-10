import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Mypage from "./mypage";
import Setting from "./setting";
import Membership from "./membership";
import Main from "./Main";
import Board from "./components/Board";
import Admin from "./components/Admin";
import {
  PageAA,
  PageAB,
  PageAC,
  PageAD,
  PageBA,
  PageBB,
  PageBC,
  PageBD,
  PageCA,
  PageCB,
  PageCC,
  PageCD,
  PageDA,
  PageDB,
  PageDC,
  PageDD,
} from "./components/Setting/SettingDetailPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/membership"} element={<Membership />}></Route>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/mypage"} element={<Mypage />}></Route>
          <Route path={"/setting"} element={<Setting />}></Route>
          <Route path={"/detail"} element={<Main />}></Route>
          <Route path={"/Board"} element={<Board />}></Route>
          <Route path={"/Admin"} element={<Admin />}></Route>
          {/* 설정 페이지 관련 임시 하드코딩 */}
          <Route path={"/PageAA"} element={<PageAA />}></Route>
          <Route path={"/PageAB"} element={<PageAB />}></Route>
          <Route path={"/PageAC"} element={<PageAC />}></Route>
          <Route path={"/PageAD"} element={<PageAD />}></Route>
          <Route path={"/PageBA"} element={<PageBA />}></Route>
          <Route path={"/PageBB"} element={<PageBB />}></Route>
          <Route path={"/PageBC"} element={<PageBC />}></Route>
          <Route path={"/PageBD"} element={<PageBD />}></Route>
          <Route path={"/PageCA"} element={<PageCA />}></Route>
          <Route path={"/PageCB"} element={<PageCB />}></Route>
          <Route path={"/PageCC"} element={<PageCC />}></Route>
          <Route path={"/PageCD"} element={<PageCD />}></Route>
          <Route path={"/PageDA"} element={<PageDA />}></Route>
          <Route path={"/PageDB"} element={<PageDB />}></Route>
          <Route path={"/PageDC"} element={<PageDC />}></Route>
          <Route path={"/PageDD"} element={<PageDD />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
