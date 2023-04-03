import React, { useState, useRef, useEffect } from "react";
import "../../css/Bio.css";
import { EditOutlined, CameraOutlined, SaveOutlined } from "@ant-design/icons";
import bioDefaultImg from "../../image/bioDefault.jpg";
import axios from "axios";

export default function Bio({ isLoggedIn, proImage, introduce, userEmail }) {
  const [BioImage, setBioImage] = useState(bioDefaultImg);
  const [BioFile, setBioFile] = useState(""); // eslint-disable-line no-unused-vars
  const BioFileInput = useRef(null);
  const [BioText, setBioText] = useState("");
  const [editable, setEditable] = useState(false);
  // ==== 이미지 부분 ====
  const onChangeBioImage = (e) => {
    e.preventDefault();
    // ==== 사진을 업로드하는 부분 ====
    if (e.target.files) {
      const uploadFile = e.target.files[0];
      setBioFile(uploadFile); // 변경한 사진으로 변경
      let formData = new FormData(); // 변경한 사진을 FormData에 넣음
      formData.append("file", uploadFile);
      formData.append("introduce", BioText);
      axios // 프로필 사진 변경하는 API요청
        .post("http://192.168.0.209:8090/user/editProfile", formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setBioImage(BioImage); // 업로드 취소할 시 기존이미지 유지
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setBioImage(reader.result);
      }
    };
    // readAsDataURL : 파일을 URL로 만듬
    reader.readAsDataURL(e.target.files[0]);
  };
  // ==== 텍스트 부분 ====
  // editable은 읽기모드 또는 편집가능 상태로 만들기
  const editToggle = () => {
    setEditable(!editable);
  };
  // 내용의 변화를 감지해서 BioText를 바꾸어준다.
  const handleBioTextChange = (e) => {
    setBioText(e.target.value);
  };
  // mypage에서 받아온 데이터로 프로필 사진과 소개글을 변경
  useEffect(() => {
    if (proImage) {
      setBioImage(proImage);
    }
    if (introduce) {
      setBioText(introduce);
    }
  }, []);

  // ==== 본인 여부 확인 부분 ==
  const [realMine, setRealMine] = useState([]);
  const [thisIsFalse, setThisIsFalse] = useState(false);
  axios
    .get("http://192.168.0.209:8090/user/me")
    .then((response) => {
      setRealMine(response.data.email);
    })
    .catch((err) => console.log(err));
  if (realMine === userEmail) {
    setThisIsFalse(true);
  }
  // ==== 편집 버튼 부분 ====
  function BioEditButton() {
    return (
      <>
        {/* 이미지 편집 버튼 */}
        <span
          id="BioEditSpan"
          onClick={() => {
            BioFileInput.current.click();
          }}
        >
          <CameraOutlined style={{ fontSize: "32px" }} />
          &nbsp; 사진 변경
        </span>
        {/* 편집 On/Off 버튼*/}
        {editable ? (
          <span id="BioEditSpan" onClick={() => editToggle()}>
            <SaveOutlined style={{ fontSize: "32px" }} />
            &nbsp; 변경 완료
          </span>
        ) : (
          <span id="BioEditSpan" onClick={() => editToggle()}>
            <EditOutlined style={{ fontSize: "32px" }} />
            &nbsp; 소개글 변경
          </span>
        )}
      </>
    );
  }

  return (
    <div className="profile_author">
      {/* <div>{realMine}</div> */}
      <div>
        {/* === 이미지 부분 === */}
        <img src={BioImage} alt="BioImage" />
        <input
          type="file"
          accept="image/*"
          id="profile-upload"
          onChange={onChangeBioImage}
          ref={BioFileInput}
          style={{ display: "none" }}
        />
      </div>
      {/* === edit 버튼 부분 === */}
      {/*
        레이아웃에서 로그인 여부를 나타내는 변수 isLoggedIn를 가져옴
        로그인 여부에 따라서 edit 버튼을 표시해줌
        로그인한 사람과 게시물 이메일을 서로 비교하여 같은 경우 버튼 표시
      */}
      <div>{isLoggedIn && thisIsFalse && <BioEditButton />}</div>
      <br />
      {/* === 소개글 부분 === */}
      {/* editable의 값에 따라 readOnly를 on/off 해줍니다 */}
      {editable ? (
        <textarea
          rows={10}
          value={BioText}
          onChange={(e) => handleBioTextChange(e)}
          id="BioTextareaEditOn"
        />
      ) : (
        <textarea value={BioText} id="BioTextareaEditOff" rows={10} readOnly />
      )}
    </div>
  );
}
