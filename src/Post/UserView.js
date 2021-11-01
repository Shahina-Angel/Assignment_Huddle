import React, { useState, useEffect } from "react";
import '../css/post.css';

export default function UserView(props) {
  const user = props.location.state.userInfo;

  return (
    <>
      <button onClick={() => props.history.push("/")}>Back</button>
      {user && (
        <div className="userCard">
          <div>{user.username}</div>
          <div>{user.name}</div>
          <div style={{color:"blue",textDecoration: "underline"}}>{user.email}</div>
          <div style={{color:"blue"}}>{user.website}</div>
          <div>{user.company.name}</div>
        </div>
      )}
    </>
  );
}
