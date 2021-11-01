import React, { useState, useEffect } from "react";
import List from "../Post/List";
import axios from "axios";
import "../css/post.css";
import { URLS } from "./urlConfig";

function Post(props) {
  let [posts, setPosts] = useState([]);
  let [searchPosts, setSearchPosts] = useState([]);
  let [autoSuggestion, setAutoSuggestion] = useState(false);

  useEffect(() => {
    let url = URLS.GET_POSTS;
    axios.get(url).then((response) => {
      setPosts(response.data);
    });
  }, []);

  const getSearchPost = (str) => {
    setSearchPosts([]);
    str.length > 0 ? setAutoSuggestion(true) : setAutoSuggestion(false);
    let temp = posts
      .map((item) => item.title)
      .filter((item) => item.includes(str));
    setSearchPosts(temp);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => getSearchPost(e.target.value)}
      />

      {autoSuggestion ? (
        <ul>
          {searchPosts.map((item) => (
            <li
              key={item}
              onClick={() => {
                let temp = posts.find((post) => post.title === item);
                props.history.push({ pathname: "/preview", state: temp });
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <List list={posts} />
        </ul>
      )}
    </>
  );
}

export default Post;
