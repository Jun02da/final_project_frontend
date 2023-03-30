import React, { useState, useEffect } from "react";
import {
  addAnnouncement,
  getAnnouncements,
  deleteAnnouncement,
  editAnnouncement,
} from "../utils/api";

function Announcement() {
  const [title, setTitle] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [showList, setShowList] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await addAnnouncement(title, announcement, token);
      console.log(response);
      setTitle("");
      setAnnouncement("");
      alert("등록이 완료되었습니다.");
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
  const handleEditAnnouncement = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await editAnnouncement(editingAnnouncement, title, announcement, token);
      setTitle("");
      setAnnouncement("");
      setEditingAnnouncement(null);
      alert("수정이 완료되었습니다.");
    } catch (error) {
      console.error(error);
    }
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
  const handleEditClick = (announcement) => {
    setEditingAnnouncement(announcement);
    setTitle(announcement.title);
    setAnnouncement(announcement.content);
  };
  return (
    <div className="Announcement">
      <h2>공지사항</h2>
      <form
        onSubmit={editingAnnouncement ? handleEditAnnouncement : handleSubmit}
      >
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
        <button type="submit">
          {editingAnnouncement ? "수정하기" : "등록"}
        </button>
        {editingAnnouncement && (
          <button type="button" onClick={() => setEditingAnnouncement(null)}>
            취소
          </button>
        )}
      </form>
      <h3>
        공지사항 목록{" "}
        <button onClick={handleToggleList}>
          {showList ? "목록 숨기기" : "목록 보이기"}
        </button>
      </h3>
      {showList && ( // showList가 true일 때만 목록을 표시하도록 함
        <>
          <ul>
            {announcements.map((announcement) => (
              <div key={announcement.id} className="announcement-item">
                <h4>{announcement.title}</h4>
                <button onClick={() => handleDeleteAnnouncement(announcement)}>
                  삭제
                </button>
                <button onClick={() => handleEditClick(announcement)}>
                  수정
                </button>
                <p className="announcement_content">{announcement.content}</p>
                <div className="announcement_at">
                  <span>
                    생성일: {new Date(announcement.created_at).toLocaleString()}
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span>
                    수정일:
                    {new Date(announcement.modified_at).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Announcement;
