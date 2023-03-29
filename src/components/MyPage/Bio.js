import React, { useState, useRef, useEffect } from "react";
import "../../css/Bio.css";
import { EditOutlined, CameraOutlined, SaveOutlined } from "@ant-design/icons";
import bioDefaultImg from "../../image/bioDefault.jpg";
import axios from "axios";

export default function Bio({ isLoggedIn }) {
  // === axios 부분 ===
  const fetchBioData = async () => {
    try {
      const response = await axios.get("http://192.168.0.209:8090/user/me");
      const proImage = response.data.proImage;
      const introduce = response.data.introduce;
      setBioImage(proImage);
      setBioText(introduce);
    } catch (error) {
      console.error(error);
    }
  };
  // 컴포넌트가 처음 마운트될 때 받아옴
  useEffect(() => {
    fetchBioData();
  }, []);
  // ==== 이미지 부분 ====
  const [BioImage, setBioImage] = useState(bioDefaultImg);

  const BioFileInput = useRef(null);
  const [BioFile, setBioFile] = useState(""); // eslint-disable-line no-unused-vars

  const onChangeBioImage = (e) => {
    if (e.target.files[0]) {
      setBioFile(e.target.files[0]);
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
    // // 이미지 axios.put
    // axios.post("http://192.168.0.209:8090/user/me", {
    //   proImage: "e.target.files[0]",
    // });
  };
  // ==== 텍스트 부분 ====
  const [BioText, setBioText] = useState("");
  // editable은 읽기모드 또는 편집가능 상태로 만들기
  const [editable, setEditable] = useState(false);
  const editToggle = () => {
    setEditable(!editable);
  };
  // 내용의 변화를 감지해서 BioText를 바꾸어준다.
  const handleBioTextChange = (e) => {
    setBioText(e.target.value);

    // // 텍스트 axios.put
    // axios.post("http://192.168.0.209:8090/user/me", {
    //   introduce: e.target.value,
    // });
  };

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
          <CameraOutlined style={{ fontSize: "40px" }} />
          &nbsp; 사진 변경
        </span>
        {/* 편집 On/Off 버튼*/}
        {editable ? (
          <span id="BioEditSpan" onClick={() => editToggle()}>
            <SaveOutlined style={{ fontSize: "40px" }} />
            &nbsp; 소개글 저장
          </span>
        ) : (
          <span id="BioEditSpan" onClick={() => editToggle()}>
            <EditOutlined style={{ fontSize: "40px" }} />
            &nbsp; 소개글 변경
          </span>
        )}
      </>
    );
  }
  // const [editButton, setEditButton] = useState(false);
  // const showEditButton = () => {
  //   setEditButton;
  // };
  return (
    <div className="profile_author">
      <div>
        {/* === 이미지 부분 === */}
        <img src={BioImage} alt="BioImage" />
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/jpg,image/png,image/jpeg"
          name="profile_img"
          onChange={onChangeBioImage}
          ref={BioFileInput}
        />
      </div>
      {/* === edit 버튼 부분 === */}
      {/*
        레이아웃에서 로그인 여부를 나타내는 변수 isLoggedIn를 가져옴
        로그인 여부에 따라서 edit 버튼을 표시해줌
      */}
      <div>{isLoggedIn && <BioEditButton />}</div>
      {/* <div value={CheckLogin}></div> */}
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
