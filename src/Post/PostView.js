import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/post.css';
import { URLS } from "./urlConfig";

export default function PostView(props) {
  const [comments, setComments] = useState();
  const { postId, title, userName, userId, userInfo } = props.location.state;

  useEffect(() => {
    let url = URLS.GET_COMMENTS;
    axios.get(url).then((response) => {
      let temp = response.data.filter((item) => item.postId == postId);
      setComments(temp);
    });
  }, [postId]);

  return (
    <>
      <button onClick={() => props.history.push("/")}>Back</button>
      <ul>
        {comments &&
          comments.length > 0 &&
          comments.map((item) => (
            <li key={item.id}>
              <div className="mb-10 title">{title}</div>
              <div className="mb-10">{userName}</div>
              <div className="mb-10">{item.name}</div>
              <div className="mb-10">{item.body}</div>
              <div
                style={{ color: "blue", textDecoration: "underline" }}
                className="mb-10"
                onClick={() =>
                  props.history.push({
                    pathname: "/userview",
                    state: {
                      userInfo: userInfo,
                    },
                  })
                }
              >
                {item.email}
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
