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
      `http://192.168.0.209:8090/notice/${announcementId}`,
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
    console.log("editAnnouncement", editingAnnouncement, title, content, token);
    const response = await axios.put(
      `http://192.168.0.209:8090/notice/${editingAnnouncement.id}`,
      { title, content } // title과 content 정보를 모두 전달
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("수정 중 오류가 발생했습니다.");
  }
};
