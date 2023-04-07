import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import "../../css/MainHome.css";
import axios from "axios";
import Modal from "react-modal";
import "../../css/login.css";
import "../../css/MainHeader.css";

Modal.setAppElement("#root");

export default function MasonryImageList() {
  // ======== 로그인 부분
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rememberEmail, setRememberEmail] = useState(false); // 이메일 기억하기 상태

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberEmailChange = (event) => {
    if (!event.target.checked) {
      setPassword("");
    }
    setRememberEmail(event.target.checked);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.get("http://192.168.0.209:8090/user/me").catch((error) => {
        console.log(error);
      });
    }
    setIsLoggedIn(!!token);
    const storedEmail = localStorage.getItem("rememberedEmail");
    if (storedEmail) {
      setRememberEmail(true);
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (rememberEmail) {
      localStorage.setItem("rememberedEmail", email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
  }, [rememberEmail, email]);

  const handleLogin = () => {
    axios
      .post(
        "http://192.168.0.209:8090/login",
        { email, password },
        { withCredentials: true, crossDomain: true, credentials: "include" }
      )
      .then((response) => {
        const token = response.data;
        alert("로그인 성공.");
        if (token) {
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setIsLoggedIn(true);
          handleCloseModal();
          setIsModalOpen(false);
          if (email === "admin") {
            window.location.href = "/Admin";
          } else {
            window.location.reload();
          }
        } else {
          delete axios.defaults.headers.common["Authorization"];
          alert("토큰 받기 실패");
        }
      })
      .catch((error) => {
        console.error(error);
        setPassword("");
        alert("로그인에 실패했습니다.");
      });
  };
  function goHome() {
    movePage("/");
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setIsLoggedIn(false);
    alert("로그아웃되었습니다.");
    goHome();
  };

  const handleButtonClick = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      handleOpenModal();
    }
  };
  // 여기까지 로그인 부분
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  useEffect(() => {
    axios
      .get("http://192.168.0.209:8090/post")
      .then((response) => {
        const data = response.data;
        setPostData(data);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://192.168.0.209:8090/user/all")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredData =
    selectedCategory === "all"
      ? postData
      : postData.filter((item) => item.category === selectedCategory);

  const uniqueEmails = [];
  const filteredByEmailData = filteredData.filter((item) => {
    if (uniqueEmails.indexOf(item.email) === -1) {
      uniqueEmails.push(item.email);
      return true;
    }
    return false;
  });

  // console.log(filteredByEmailData);

  const movePage = useNavigate();
  return (
    <>
      {/* 로그인 부분 시작 */}
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          className="login_modal"
          closeTimeoutMS={0}
          style={{
            overlay: { zIndex: 1000 },
            content: { zIndex: 1000 },
          }}
        >
          <button className="login_close_button" onClick={handleCloseModal}>
            X
          </button>
          <h2 className="login">로그인</h2>
          {errorMessage && <div className="login_error">{errorMessage}</div>}
          <div className="login_form">
            <input
              type="email"
              placeholder="이메일 입력"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="login_form">
            <input
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="remember-email-checkbox"
              checked={rememberEmail}
              onChange={handleRememberEmailChange}
            />
            <label className="RememberEmail" htmlFor="remember-email-checkbox">
              이메일 유지
            </label>
          </div>
          <br />
          <button className="login_button" onClick={handleLogin}>
            로그인
          </button>
          <br />
          <div className="login_button_container">
            <div className="Membership_Text">
              아직 Phopo 계정이 없으신가요?&nbsp;
              <label
                className="MemberShip_Btn"
                onClick={() => (window.location.href = "/MemberShip")}
              >
                지금 가입하기
              </label>
            </div>
          </div>
          <br />
        </Modal>
      </div>
      {/* 여기까지 로그인 부분 */}
      <Box
        sx={{
          width: "auto",
          height: "auto",
          marginLeft: 15,
          marginRight: 15,
          marginTop: 10,
        }}
      >
        <div className="category">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category_box"
          >
            <option value="all">최신 인기 사진</option>
            <option value="Home">Home</option>
            <option value="Animal">Animal</option>
            <option value="Food">Food</option>
            <option value="Sports">Sports</option>
            <option value="Nature">Nature</option>
            <option value="Person">Person</option>
          </select>
        </div>

        <ImageList variant="masonry" cols={3} gap={10}>
          {filteredByEmailData.map((post, index) => {
            // postData -> post로 변수명 변경
            const checkProImage = userData.filter(
              (item) => item.proImage !== undefined
            );
            const checkNickname = checkProImage.filter(
              (item) => item.nickname !== undefined
            );
            const user = checkNickname.find(
              (user) => user.email === post.email
            );
            // const linkTo = `/mypage/${post.email}`;
            console.log(checkNickname);
            function goMypage() {
              // 페이지를 넘어가면서 state(데이터)도 같이 넘긴다
              if (isLoggedIn) {
                movePage("/MypageGuest", {
                  state: {
                    category: post.category,
                    content: post.content,
                    created_at: post.created_at,
                    postEmail: post.email,
                    image_url: post.image_url,
                    likeCnt: post.likeCnt,
                    modified_at: post.modified_at,
                    post_id: post.post_id,
                    birth: user.birth,
                    userEmail: user.email,
                    followerCnt: user.followerCnt,
                    followingCnt: user.followingCnt,
                    gender: user.gender,
                    introduce: user.introduce,
                    nickname: user.nickname,
                    password: user.password,
                    phone: user.phone,
                    proImage: user.proImage,
                    role: user.role,
                    visitCnt: user.visitCnt,
                    website: user.website,
                  },
                });
              } else {
                handleButtonClick(); // 로그인을 하지않은 상태이므로 로그인창으로 이동
              }
            }

            return (
              <ImageListItem key={index} className="banner_img">
                <div onClick={goMypage}>
                  <img
                    style={{
                      margin: "auto",
                      display: "block",
                      width: "100%",
                      height: "100%",
                    }}
                    src={`${post.image_url}?w=200&fit=auto&auto=format`}
                    srcSet={`${post.image_url}?w=200&fit=auto&auto=format&dpr=2 2x`}
                    alt={`Imagefile ${index}`}
                  />
                </div>
                {/* 이미지 카드에 마우스 올리면 닉네임이 보임 */}
                {/* 프로필 사진과 닉네임 */}
                <ul className="hover_text" style={{ listStyleType: "none" }}>
                  <li style={{ float: "left", margin: 8, marginLeft: -10 }}>
                    <Avatar alt="icon" src={user.proImage} />
                  </li>
                  <li style={{ float: "left", marginTop: 8 }}>
                    <p>{user.nickname}</p>
                  </li>
                </ul>
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    </>
  );
}
