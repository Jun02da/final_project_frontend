import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Mypage from "./mypage";
import Setting from "./setting";
import Membership from "./membership";
import Main from "./Main";
import Board from "./components/Board";
import Admin from "./components/Admin";
import ApexCharts from "./components/Charts/ApexCharts.js";

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
          <Route path={"/apexcharts"} element={<ApexCharts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
