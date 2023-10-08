import React from "react";
import "./chatList.css";

const ChatList = ({ name, text }) => {
  return (
    <div className="chatList">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        alt={name}
      />
      <div className="chatList__info">
        <span>{name}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default ChatList;
