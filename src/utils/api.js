// 백엔드 서버 주소
const SERVER_URL = "http://localhost:8000";

// 계정 삭제 API 요청을 보내는 함수
export const deleteAccount = async (username) => {
  const response = await fetch(`${SERVER_URL}/api/accounts/${username}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("계정을 삭제 실패");
  }
};

// 공지사항 API 요청을 보내는 함수
export const getAnnouncements = async () => {
  const response = await fetch(`${SERVER_URL}/api/announcements`);
  if (!response.ok) {
    throw new Error("공지사항 업로드 실패");
  }
  const data = await response.json();
  return data;
};
