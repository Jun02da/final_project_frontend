import React, { useState } from "react";
import AccountDelete from "./AccountDelete";
import Announcement from "./Announcement";

function Admin() {
  const [showDelete, setShowDelete] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  const handleDeleteToggle = () => {
    setShowDelete(!showDelete);
  };

  const handleAnnouncementToggle = () => {
    setShowAnnouncement(!showAnnouncement);
  };

  const handleMenuItemClick = (event) => {
    const target = event.target.getAttribute("name");
    if (target === "delete") {
      handleDeleteToggle();
    } else if (target === "announcement") {
      handleAnnouncementToggle();
    }
  };

  return (
    <div>
      <h1>관리자 페이지</h1>
      <div className="dropdown">
        <button className="dropbtn">메뉴</button>
        <div className="dropdown-content">
          <button name="delete" onClick={handleMenuItemClick}>
            계정 삭제
          </button>
          <button name="announcement" onClick={handleMenuItemClick}>
            공지사항
          </button>
        </div>
      </div>
      {showDelete && <AccountDelete />}
      {showAnnouncement && <Announcement />}
    </div>
  );
}

export default Admin;
