import React, { useState } from "react";
import { deleteAccount } from "../utils/api";

function AccountDelete() {
  const [username, setUsername] = useState("");

  const handleDelete = async (event) => {
    event.preventDefault();
    await deleteAccount(username);
    setUsername("");
  };

  return (
    <div className="AccountDelete">
      <h2>계정 삭제</h2>
      <form onSubmit={handleDelete}>
        <label>
          삭제할 계정의 사용자 ID:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <button type="submit">삭제</button>
      </form>
    </div>
  );
}

export default AccountDelete;
