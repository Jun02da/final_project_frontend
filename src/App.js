import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Mypage from "./mypage";
import Setting from "./setting";
import Membership from "./membership";
import Main from "./Main";
import Board from "./components/Help/Board";
import Admin from "./components/Admin";
import FAQ from "./components/Help/FAQ.js";
import Advice from "./components/Help/Advice.js";
import Bio from "./bio";
import Buy from "./buy";

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
          <Route path={"/FAQ"} element={<FAQ />}></Route>
          <Route path={"/Advice"} element={<Advice />}></Route>
          <Route path={"/Admin"} element={<Admin />}></Route>
          <Route path={"/bio"} element={<Bio />}></Route>
          <Route path={"/buy"} element={<Buy />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
