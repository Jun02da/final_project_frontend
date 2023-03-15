import { useNavigate } from "react-router-dom";
/* buy.js = 사진구매 */
export default function Buy() {
  const movePage = useNavigate();

  function gomypage() {
    movePage("/mypage");
  }
  return (
    <div>
      buy 페이지입니다.
      <button onClick={gomypage}>마이페이지 이동</button>
    </div>
  );
}
