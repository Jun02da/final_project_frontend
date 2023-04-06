import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import axios from "axios";

const PostSide = (user) => {
  const [postData, setPostData] = useState([]);
  const email = user.user.userEmail;
  const getPost = async () => {
    const res = await axios.get(
      `http://192.168.0.209:8090/post/email/${email}`
    );
    // console.log(res.data);
    if (res.data) {
      setPostData(res.data); //리스트 추가
      // console.log(res.data);
    } else {
      console.log(res); //에러
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  console.log(postData);
  console.log(user);
  return (
    <div className="SideBlock">
      <div>
        {postData &&
          postData.map((el, index) => {
            return (
              <Link to={`${index}`} spy={true} smooth={true}>
                <span>
                  <img
                    style={{
                      width: "70px",
                      margin: "2px",
                      borderRadius: "5px",
                    }}
                    src={`${el.image_url}`}
                    alt={`${el.nickname}`}
                  />
                </span>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default PostSide;
