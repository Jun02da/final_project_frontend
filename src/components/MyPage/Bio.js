import React from "react";
import "../../css/mypage.css";
import profile_Img from "../../image/profile.jpg";
import Header from "../Layout/MyPageHeader";
import Footer from "../Layout/footer";
/* bio.js = 작가소개 */
export default function Bio() {
  return (
    <div>
      <Header />
      <div className="profile_author">
        <img src={profile_Img} alt="zz" />
        <h2>백다흠</h2>
        <p>
          압구정동 찻집에서 만난 백다흠 씨는 인근 로데오 거리에 어울리는 상큼한
          모습으로 나타났다. 김훈 고은 공지영 신경숙 은희경 윤대녕 김인숙 김경욱
          김영하 등 내로라하는 문인 60여 명을 렌즈로 담아냈으니 자신감이 툭
          배어나올 것 같은데 정반대였다. 천천히 신중하게 말하는 스타일인 그는
          “사진이 좋다는 얘기가 퍼지면서 의뢰가 많아진 거 아니냐”고 물어야
          마지못해 “입소문이 재미있고 무섭던데요”라고 했다. “백 작가한테 안
          찍으면 일류가 아니라는 말 나오겠다”고 하자 “그렇게 생각해주시면 너무
          고맙지요”라고 가까스로 대답했다. 그러면서 “사람 찍는 게 가장
          어려워요”라고 했다.
        </p>
      </div>
      <Footer />
    </div>
  );
}
