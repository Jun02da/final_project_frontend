import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import image_import from "./image/img01.png";
import image_import2 from "./image/img02.png";
import "./css/profile.css";
import "./css/profile_list.css";

import {
  AiOutlineUnorderedList,
  AiOutlineUpCircle,
  AiOutlinePlusCircle,
  AiFillSetting,
  AiFillHome,
  AiOutlineMenu,
} from "react-icons/ai";

function Mypage(props) {
  const [imageUrl, setImageUrl] = useState(null);
  const imgRef = useRef();

  const movePage = useNavigate();

  function goSetting() {
    movePage("/setting");
  }

  function goHome() {
    movePage("/");
  }

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    console.log(file);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      console.log("이미지주소", reader.result);
    };
  };

  const onClickFileBtn = (e) => {
    imgRef.current.click();
  };

  return (
    <div className="body">
      <div className="header_main">
        <header className="header">
          <h2>POPO</h2>

          <nav>
            <div>
              <div className="header_li">
                <input type="text" placeholder="검색"></input>
                <AiOutlineMenu />
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div className="profile_main">
        <section className="section">
          <img
            className="image"
            src={
              imageUrl
                ? imageUrl
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            width={150}
            height={150}
            style={{ borderRadius: "50%" }}
            onClick={() => {
              onClickFileBtn();
            }}
          />
          <input
            type="file"
            ref={imgRef}
            onChange={onChangeImage}
            style={{ display: "none" }}
          />
          <div className="profile">
            <div>
              <div className="profile_id">yjhan713</div>
            </div>
            <div>
              <button className="profile_button">프로필 편집</button>
            </div>
            <div>
              <button className="profile_setting" onClick={goSetting}>
                <AiFillSetting />
              </button>
              <button className="profile_home" onClick={goHome}>
                <AiFillHome />
              </button>
            </div>
          </div>
          <div className="profile_state">
            <div className="item">
              <div>게시물</div>
              <div className="number">5</div>
            </div>
            <div className="item">
              <div>팔로워</div>
              <div className="number">1500</div>
            </div>
            <div className="item">
              <div>방문자</div>
              <div className="number">600</div>
            </div>
          </div>
          <div className="profile_bio">
            <div>
              <p class="profile_real_name">한용재 hihihihihihi📷✈️🏕️</p>
            </div>
          </div>
        </section>
      </div>

      <div className="list_main">
        <article className="article">
          <div>
            <button className="button_active">
              <p className="list">
                <AiOutlineUnorderedList />
                게시물
              </p>
            </button>
          </div>
          <div>
            <button className="button_active">
              <p className="save">
                <AiOutlineUpCircle />
                저장됨
              </p>
            </button>
          </div>
          <div>
            <button className="button_active">
              <p className="upload">
                <AiOutlinePlusCircle />
                업로드
              </p>
            </button>
          </div>
        </article>
        <div className="img_css">
          <img src={image_import} alt="img01" width={385} height={400} />
          <img src={image_import2} alt="img02" width={385} height={400} />
          <img src={image_import2} alt="img02" width={385} height={400} />
          <img src={image_import2} alt="img02" width={385} height={400} />
        </div>
      </div>
    </div>
  );
}

export default Mypage;
