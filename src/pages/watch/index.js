import React from "react";
import "./watch.css";
import {
  AddComment,
  Comments,
  LiveChat,
  SidebarPortal,
  VideoMetaData,
} from "../../components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import commentData from "../../constants/comments.json";

const Watch = () => {
  const { sidebarPortalShow } = useSelector((state) => state.header);

  const { id } = useParams();

  return (
    <div className="container-fluid watch">
      {sidebarPortalShow ? null : <SidebarPortal />}

      <div className="row row-col-2 ">
        <div className="col-lg-8 watch__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            allowFullScreen
            title="Video"
            width="100%"
            height="100%"
          ></iframe>
          <VideoMetaData />
          <div className="watch__comment">
            <span>Comments</span>
            <AddComment />
            <Comments comments={commentData} />
          </div>
        </div>
        <div className="col-lg-4 watch__list">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default Watch;
