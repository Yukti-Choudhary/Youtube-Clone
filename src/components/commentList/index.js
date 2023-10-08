import React from "react";
import "./commentList.css";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillDislike,
  AiFillLike,
} from "react-icons/ai";
import useLikeDislike from "../../customHook/useLikeDislike";

const CommentList = ({ comment }) => {
  const { name, text, commentedAt } = comment;

  const { like, dislike, likeCount, handleLike, handleDislike } =
    useLikeDislike();

  return (
    <div className="commentList">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        alt={name}
      />
      <div className="commentList__details">
        <p className="username">
          {name} <small>{commentedAt}</small>
        </p>
        <p>{text}</p>
        <div className="commentsList__likes">
          <p>
            <span onClick={handleLike}>
              {like ? (
                <AiFillLike size={23} />
              ) : (
                <AiOutlineLike size={23} title="Like" />
              )}
            </span>
            {likeCount > 0 && likeCount}
          </p>
          <span onClick={handleDislike}>
            {dislike ? (
              <AiFillDislike size={23} />
            ) : (
              <AiOutlineDislike size={23} title="Dislike" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
