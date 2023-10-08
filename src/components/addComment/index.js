import React, { useState } from "react";
import "./addComment.css";

const AddComment = () => {
    const [comment, setComment] = useState("");

    const handleComment = (e) => {
      e.preventDefault();
      setComment("");
    };

  return (
    <div className="addComment">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        alt="channel-title"
      />
      <form onSubmit={handleComment}>
        <input
          className="comment-input"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button>Comment</button>
      </form>
    </div>
  );
};

export default AddComment;
