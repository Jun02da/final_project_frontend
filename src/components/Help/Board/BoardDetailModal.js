import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { editAnnouncement } from "../../../utils/api";
import "../../../css/BoardDetail_Modal.css";

Modal.setAppElement("#root");

export default function BoardDetailModal({ announcement }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);

  useEffect(() => {
    if (announcement) {
      setNewTitle(announcement.title);
      setNewContent(announcement.content);
      setEditingAnnouncement(announcement);
    }
  }, [announcement]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await editAnnouncement(editingAnnouncement, newTitle, newContent, token);
      handleCloseModal();
      window.location.href = "/HelpUser";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button className="BoardDetail-change" onClick={handleOpenModal}>
        수정
      </button>

      <Modal
        className="BoardDetail-modal"
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      >
        <form onSubmit={handleSubmit}>
          <h2>공지사항 수정</h2>
          <label htmlFor="BoardDetail-title">제목</label>
          <input
            type="text"
            id="BoardDetail-title"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
          <label htmlFor="BoardDetail-content">내용</label>
          <textarea
            id="announcement-content"
            value={newContent}
            onChange={(event) => setNewContent(event.target.value)}
            wrap="soft"
          />
          <button type="submit">수정</button>
          <button type="button" onClick={handleCloseModal}>
            취소
          </button>
        </form>
      </Modal>
    </div>
  );
}
