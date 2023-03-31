import React, { useState, useEffect } from "react";
import {
  addAnnouncement,
  getAnnouncements,
  deleteAnnouncement,
  editAnnouncement,
} from "../utils/api";
import AnnouncementDetails from "./AnnouncementDetails";

function Announcement() {
  const [title, setTitle] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [showList, setShowList] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const handleShowDetails = (announcement) => {
    setSelectedAnnouncement(announcement);
    setShowDetails(true);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (editingAnnouncement) {
        await editAnnouncement(editingAnnouncement, title, announcement, token);
        alert("수정이 완료되었습니다.");
        setEditingAnnouncement(null);
      } else {
        const response = await addAnnouncement(title, announcement, token);
        console.log(response);
        setTitle("");
        setAnnouncement("");
        alert("등록이 완료되었습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAnnouncement = async (announcementId) => {
    const token = localStorage.getItem("token");
    try {
      await deleteAnnouncement(announcementId, token);
      if (window.confirm("정말 삭제하시겠습니까?")) {
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditAnnouncement = (announcement) => {
    setEditingAnnouncement(announcement);
    setTitle(announcement.title);
    setAnnouncement(announcement.content);
  };

  const handleToggleList = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await getAnnouncements();
        setAnnouncements(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAnnouncements();
  }, []);

  return (
    <div className="Announcement">
      <h2>공지사항</h2>
      <form onSubmit={handleSubmit}>
        <label>
          제목:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          내용:
          <textarea
            value={announcement}
            onChange={(event) => setAnnouncement(event.target.value)}
          />
        </label>
        <div className="form-buttons">
          <button type="submit">
            {editingAnnouncement ? "수정하기" : "등록"}
          </button>
          {editingAnnouncement && (
            <button type="button" onClick={() => setEditingAnnouncement(null)}>
              취소
            </button>
          )}
        </div>
      </form>
      <button className="announcement-list" onClick={handleToggleList}>
        {showList ? "공지사항 숨기기" : "공지사항 리스트"}
      </button>
      {!editingAnnouncement && (
        <>
          {showList && (
            <ul>
              {announcements.map((announcement) => (
                <div key={announcement.id} className="announcement-box">
                  <h4
                    className="Announcement-title"
                    onClick={() => handleShowDetails(announcement)}
                  >
                    {announcement.title}
                  </h4>
                  <div className="">
                    <button
                      className="announcement-list-btn"
                      onClick={() => {
                        handleShowDetails(announcement);
                      }}
                    >
                      자세히 보기
                    </button>
                    <button
                      className="announcement-list-btn"
                      onClick={() => handleEditAnnouncement(announcement)}
                    >
                      수정
                    </button>
                    <button
                      className="announcement-list-btn"
                      onClick={() => handleDeleteAnnouncement(announcement)}
                    >
                      삭제
                    </button>
                    <div className="announcement_at">
                      <span>
                        생성일:{" "}
                        {new Date(announcement.created_at).toLocaleString()}
                      </span>
                      &nbsp;&nbsp;&nbsp;
                      <span>
                        수정일:
                        {new Date(announcement.modified_at).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          )}
          {showDetails && (
            <AnnouncementDetails
              announcement={selectedAnnouncement}
              isOpen={showDetails}
              onClose={() => setShowDetails(false)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Announcement;
