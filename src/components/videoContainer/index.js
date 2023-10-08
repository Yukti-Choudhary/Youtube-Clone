import React from "react";
import "./videoContainer.css";
import VideoCard from "../videoCard";
import CategoriesBar from "../categoriesBar";
import { useSelector } from "react-redux";

const VideoContainer = ({ videos }) => {
  const toggle = useSelector((store) => store.header.toggle);

  return (
    <div className={toggle ? "videoContainer" : "closed"}>
      <div className="container videoContainer__main">
        <CategoriesBar />
        <div className="row videoContainer__video">
          {videos.map((video, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6 " key={video.id}>
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
