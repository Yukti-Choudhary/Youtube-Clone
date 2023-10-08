import React, { useEffect, useRef, useState } from "react";
import "./videoContainer.css";
import VideoCard from "../videoCard";
import CategoriesBar from "../categoriesBar";
import { useDispatch, useSelector } from "react-redux";

const VideoContainer = ({ videos }) => {
  const toggle = useSelector((store) => store.header.toggle);

  const dispatch = useDispatch();

  // const {
  //   videos, //videos: initialVideos,
  //   // nextPageToken: initialNextPageToken,
  //   status,
  // } = useSelector((state) => state.homeVideos);

  // const [videos, setVideos] = useState(initialVideos);
  // const [nextPageToken, setNextPageToken] = useState(initialNextPageToken);

  // const observer = useRef(null);

  // const lastVideoRef = (node) => {
  //   if (status === "loading") return;
  //   if (observer.current) observer.current.disconnect();

  //   observer.current = new IntersectionObserver(async (entries) => {
  //     if (entries[0].isIntersecting && nextPageToken) {
  //       const res = await dispatch(
  //         getPopularVideos({ maxResults: 9, pageToken: nextPageToken })
  //       );
  //       if (res.meta.requestStatus === "fulfilled") {
  //         const { videos: newVideos, nextPageToken: newNextPageToken } =
  //           res.payload;
  //         setVideos((prevVideos) => [...prevVideos, ...newVideos]);
  //         setNextPageToken(newNextPageToken);
  //       } else {
  //         console.log("Error:", res.error.errorMessage);
  //       }
  //     }
  //   });

  //   if (node) observer.current.observe(node);
  // };
  
  // useEffect(() => {
  //   dispatch(getPopularVideos());
  // }, [dispatch]);

  return (
    <div className={toggle ? "videoContainer" : "closed"}>
      <div className="container videoContainer__main">
        <CategoriesBar />
        <div className="row videoContainer__video">
          {videos.map((video, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 "
              key={video.id}
              // ref={index === videos.length - 1 ? lastVideoRef : null}
            >
              {/* {status === "loading" ? (
                <center>
                  <iframe
                    title="loading"
                    src="https://giphy.com/embed/KG4PMQ0jyimywxNt8i"
                    width="110"
                    height="110"
                    className="giphy-embed"
                  ></iframe>
                </center>
              ) : ( */}
              <VideoCard video={video} />
              {/* )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
