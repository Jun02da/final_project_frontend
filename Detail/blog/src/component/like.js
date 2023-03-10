// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function LikeButton({ postId }) {
//   const [liked, setLiked] = useState(false);
//   const [likeCount, setLikeCount] = useState(0);
//   const [userList, setUserList] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get(`/api/posts/${postId}/likes`);
//       const data = response.data;
//       setLikeCount(data.likeCount);
//       setUserList(data.userList);
//     }
//     fetchData();
//   }, [postId]);

//   const handleLike = async () => {
//     if (liked) {
//       setLikeCount(likeCount - 1);
//       setUserList(userList.filter((user) => user.id !== 1));
//     } else {
//       setLikeCount(likeCount + 1);
//       setUserList([...userList, { id: 1, name: "John" }]);

//       await axios.post(`/api/posts/${postId}/likes`, {
//         userId: 1,
//         userName: "John",
//       });
//     }
//     setLiked(!liked);
//   };

//   return (
//     <div>
//       <button onClick={handleLike}>{liked ? "좋아요 취소" : "좋아요"}</button>
//       <span>{likeCount}명이 좋아합니다.</span>
//       <div>
//         {userList.map((user) => (
//           <span key={user.id}>{user.name}</span>
//         ))}
//       </div>
//     </div>
//   );
// }
