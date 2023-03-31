import React from "react";
import { useState, useRef, useMemo } from "react";

const ContentShowMore = ({ content }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const textLimit = useRef(5);

  const commenter = useMemo(() => {
    const shortReview = content.slice(0, textLimit.current);

    if (content.length > textLimit.current) {
      if (isShowMore) {
        return content;
      }
      return shortReview;
    }
    return content;
  }, [content, isShowMore]);

  return (
    <span>
      {commenter}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span onClick={() => setIsShowMore(!isShowMore)}>
        {content.length > textLimit.current && (isShowMore ? "" : "...더보기")}
      </span>
    </span>
  );
};

export default ContentShowMore;
