import React from "react";
import "./comments.css";
import CommentList from "../commentList";

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <CommentList comment={comment} />
            <div className="comments__replies">
              <Comments comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
