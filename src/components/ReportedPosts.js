import React, { useState } from "react";
import { Button, Card } from "antd";

function ReportedPosts(props) {
  const [reportCount, setReportCount] = useState(0);

  const handleReportClick = () => {
    setReportCount(reportCount + 1);
  };

  return (
    <Card title={props.title}>
      <p>{props.content}</p>
      <Button onClick={handleReportClick}>신고 횟수 총 {reportCount}회</Button>
    </Card>
  );
}

export default ReportedPosts;
