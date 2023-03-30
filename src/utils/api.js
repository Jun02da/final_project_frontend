import axios from "axios";

export const addAnnouncement = async (title, content, token) => {
  try {
    const response = await axios.post(
      "http://192.168.0.209:8090/notice/add",
      { title, content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAnnouncements = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://192.168.0.209:8090/notice", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const deleteAnnouncement = async (announcementId, token) => {
  try {
    const response = await axios.delete(
      `http://192.168.0.209:8090/notice/${announcementId.notice_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
export const editAnnouncement = async (
  editingAnnouncement,
  title,
  content,
  token
) => {
  try {
    await axios.put(
      `http://192.168.0.209:8090/notice/${editingAnnouncement.notice_id}`,
      { title, content }, // title과 content 정보를 모두 전달
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // 이전에 수정한 것처럼, `editingAnnouncement` 객체를 직접 수정하면 더 좋을 것입니다.
    // 수정된 필드 값을 서버에서 반환받은 필드 값으로 덮어쓰는 방법을 사용하셔도 됩니다.
    editingAnnouncement.title = title;
    editingAnnouncement.content = content;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
