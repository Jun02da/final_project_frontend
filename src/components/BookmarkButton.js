import React, { useState } from "react";

function FollowButton({ userId }) {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleClick = async () => {
    try {
      const response = await fetch(
        `http://192.168.0.209:8090/user_follow/${userId}`,
        { method: isFollowed ? "DELETE" : "POST" }
      );
      const data = await response.json();
      setIsFollowed(data.success);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleClick}>{isFollowed ? "언팔로우" : "팔로우"}</button>
  );
}

export default FollowButton;
