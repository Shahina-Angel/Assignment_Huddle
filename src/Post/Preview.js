import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../css/post.css";
import { URLS } from "./urlConfig";

function Preview(props) {
  const postInfo = props.location.state;
  const [userName, setUserName] = useState();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    let url = `${URLS.GET_USER}/${postInfo.userId}`;
    axios.get(url).then((response) => {
      setUserName(response.data.username);
      setUserInfo(response.data);
    });
  }, []);

  return (
    <>
      <div
        style={{ fontWeight: "bold" }}
        onClick={() =>
          props.history.push({
            pathname: "/postview",
            state: {
              postId: postInfo.id,
              title: postInfo.title,
              userName: userName,
              userId: postInfo.userId,
              userInfo: userInfo
            },
          })
        }
      >
        {postInfo.title}
      </div>
      <div
        onClick={() =>
          props.history.push({
            pathname: "/userview",
            state: {
              userInfo: userInfo,
            },
          })
        }
      >
        <span style={{ fontSize: "12px" }}>Created By</span>{" "}
        <span style={{ color: "blue" }}>{userName}</span>
      </div>
    </>
  );
}

export default withRouter(Preview);
