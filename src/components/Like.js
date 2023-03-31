import { React, useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

const Like = ({ email, feedNum, likeCnt, setLikeCnt }) => {
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .post(`http://192.168.0.209:8090/post/like/${feedNum}`)
        .then((response) => {
          const a = response.data;
          console.log(a);
          a ? setIsLiked(true) : setIsLiked(false);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);
  const handleLikeClick = async () => {
    // 좋아요를 취소하는 경우
    if (isLiked) {
      await axios
        .post(`http://192.168.0.209:8090/post/like/${feedNum}`)
        .then((response) => {
          setIsLiked(false);
          setLikeCnt(likeCnt - 1);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // 좋아요를 추가하는 경우
      await axios
        .post(`http://192.168.0.209:8090/post/like/${feedNum}`)
        .then((response) => {
          setIsLiked(true);
          setLikeCnt(likeCnt + 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <FontAwesomeIcon
      // className={isLiked}
      icon={isLiked ? faSolidHeart : faHeart}
      onClick={handleLikeClick}
    />
  );
};

export default Like;
