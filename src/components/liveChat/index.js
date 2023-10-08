import React, { useEffect, useState } from "react";
import "./liveChat.css";
import ChatList from "../chatList";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import { generateName, makeText } from "../../helper";

const LiveChat = () => {
  const [liveChat, setLiveChat] = useState("");

  const dispatch = useDispatch();
  const chatMessage = useSelector((state) => state.chat.message);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          text: makeText(40),
        })
      );
    }, 500);

    return () => clearInterval(timer);
  }, [dispatch]);

  const handleLiveChat = (e) => {
    e.preventDefault();
    setLiveChat("");
  };

  return (
    <div className="liveChat">
      <div className="liveChat__heading">Live Chats</div>

      <div className="liveChat__body">
        {chatMessage.map((chat, index) => {
          return <ChatList key={index} name={chat.name} text={chat.text} />;
        })}
      </div>

      <div className="liveChat__input">
        <form onSubmit={handleLiveChat}>
          <input
            type="text"
            placeholder="Chat..."
            value={liveChat}
            onChange={(e) => setLiveChat(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
