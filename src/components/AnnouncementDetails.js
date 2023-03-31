import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function AnnouncementDetails({ announcement, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h4 className="Announcement-title">{announcement.title}</h4>
      <p className="announcement_content">{announcement.content}</p>
      <button onClick={onClose}>닫기</button>
    </Modal>
  );
}
