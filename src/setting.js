import { useNavigate } from "react-router-dom";

export default function Setting() {
  const movePage = useNavigate();

  function goMypage() {
    movePage("/mypage");
  }
  return (
    <div className="setting">
      설정 입니다.
      <button onClick={goMypage}>마이페이지 이동</button>
    </div>
  );
}
