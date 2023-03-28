import React, { useState, useRef } from "react";
import "../../css/mypage.css";
import "../../css/Bio.css";
import Header from "../Layout/MyPageHeader";
import Footer from "../Layout/footer";
import { EditOutlined, CameraOutlined, SaveOutlined } from "@ant-design/icons";
import bioDefaultImg from "../../image/bioDefault.jpg";
// import axios from "axios";

export default function Bio() {
  // ==== 이미지 부분 ====
  const [BioImage, setBioImage] = useState(bioDefaultImg);
  // // axios 사용 부분
  // axios.get('주소', {
  //   params: {
  //     id: 로그인한 사람
  //   }
  // })
  // .then(function(response)=>{console.log(response.data)})

  // // async와 await을 사용하는 방식 - 내가 원할 때 then()을 사용할 수 있다
  // const getBioTextData = async () => {
  //   let response = await axios.get("주소", {
  //   params: {
  //     id: 로그인한 사람
  //   }
  // });
  //   return response.data;
  // };
  // let res = getBioTextData();

  // res.then((data) => {
  //   console.log(data);
  // });

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
  };
  // ==== 텍스트 부분 ====
  const [BioText, setBioText] = useState("No Data");

  // editable은 읽기모드 또는 편집가능 상태로 만들기
  const [editable, setEditable] = useState(false);
  const editToggle = () => {
    setEditable(!editable);
  };
  // 내용의 변화를 감지해서 BioText를 바꾸어준다.
  const handleBioTextChange = (e) => {
    setBioText(e.target.value);
  };
  // === editButton 부분 ===
  // 권한이 있을 경우만 edit버튼이 활성화됨
  const BioEditButtonTrue = true; // 임시로 설정
  // const BioEditButtonfalse = false;

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
  return (
    <div>
      <Header />
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
        <div>{BioEditButtonTrue ? <BioEditButton /> : ""}</div>
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
          <textarea id="BioTextareaEditOff" rows={10} readOnly>
            {BioText}
          </textarea>
        )}
      </div>
      <Footer />
    </div>
  );
}
