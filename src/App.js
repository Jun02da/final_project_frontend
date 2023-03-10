import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Mypage from "./mypage";
import Setting from "./setting";
import Login from "./login";
import Membership from "./membership";
import Main from "./Main";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/membership"} element={<Membership />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/mypage"} element={<Mypage />}></Route>
          <Route path={"/setting"} element={<Setting />}></Route>
          <Route path={"/detail"} element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
