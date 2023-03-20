import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Mypage from "./mypage";
import Membership from "./membership";
import Main from "./Main";
import Admin from "./components/Admin";
import BoardEdit from "./components/Help/BoardEdit";
import FAQ from "./components/Help/FAQ.js";
import Communication from "./components/Help/Communication.js";
import Bio from "./components/MyPage/Bio.js";
import OtherBio from "./components/MyPage/OtherBio.js";
import Upload from "./components/MyPage/Upload.js";
import Board from "./components/Help/Board.js";
import BoardDetail from "./components/Help/Board/BoardDetail";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/membership"} element={<Membership />}></Route>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/detail"} element={<Main />}></Route>
          <Route path={"/Admin"} element={<Admin />}></Route>
          <Route path={"/BoardEdit"} element={<BoardEdit />}></Route>
          <Route path={"/FAQ"} element={<FAQ />}></Route>
          <Route path={"/Communication"} element={<Communication />}></Route>
          <Route path={"/mypage"} element={<Mypage />}></Route>
          <Route path={"/Bio"} element={<Bio />}></Route>
          <Route path={"/OtherBio"} element={<OtherBio />}></Route>
          <Route path={"/Upload"} element={<Upload />}></Route>
          <Route path={"/Board"} element={<Board />}></Route>
          <Route path={"/BoardDetail"} element={<BoardDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
