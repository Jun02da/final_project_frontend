import React from "react";

export default function ImageDeleteModal({
  show,
  onConfirm,
  onCancel,
  children,
}) {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <div className="modal-buttons">
          <button onClick={onConfirm}>예</button>
          <button onClick={onCancel}>아니오</button>
        </div>
      </div>
    </div>
  );
}
