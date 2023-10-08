import React, { useState } from "react";
import "./videoMetaData.css";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillDislike,
  AiFillLike,
} from "react-icons/ai";
import useLikeDislike from "../../customHook/useLikeDislike";

const VideoMetaData = () => {
  const [showMore, setShowMore] = useState(false);
  const { like, dislike, likeCount, handleLike, handleDislike } =
    useLikeDislike();

  return (
    <div className="videoMetaData">
      <div className="videoMetaData__title">
        <h5>
          <b>Youtube video title for the youtube-clone</b>
        </h5>
      </div>
      <div className="videoMetaData__channel">
        <div className="channel__left ">
          <img
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            alt="channelTitle"
          />
          <span>
            <p>Channel Title</p>
            <small>4m subscribers</small>
          </span>
        </div>

        <div className="channel__right">
          <span className="like-icon" onClick={handleLike}>
            {like ? (
              <AiFillLike size={23} />
            ) : (
              <AiOutlineLike size={23} title="I like this" />
            )}
            {likeCount + 467}
          </span>
          <span className="like-icon" onClick={handleDislike}>
            {dislike ? (
              <AiFillDislike size={23} />
            ) : (
              <AiOutlineDislike size={23} title="I dislike this" />
            )}
          </span>
          <span>Subscribe</span>
        </div>
      </div>
      <div className="videoMetaData__description">
        <span>43,980 views 1 month ago</span>
        <p className={showMore ? "showLess-btn" : "showMore-btn"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies
          mi eget mauris pharetra et ultrices neque. Suspendisse faucibus
          interdum posuere lorem ipsum dolor sit amet.
          <br />
          <br />
          Viverra accumsan in nisl nisi. Etiam dignissim diam quis enim
          lobortis. Nisl rhoncus mattis rhoncus urna. Netus et malesuada fames
          ac turpis egestas sed. Nulla facilisi nullam vehicula ipsum a arcu.
          Est sit amet facilisis magna etiam tempor orci. Metus dictum at tempor
          <br />
          <br />
          commodo ullamcorper a lacus vestibulum sed. Congue nisi vitae suscipit
          tellus mauris a diam maecenas sed. Tristique risus nec feugiat in
          fermentum posuere urna nec. Pellentesque id nibh tortor id.
        </p>
        <span onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show more"}
        </span>
      </div>
    </div>
  );
};

export default VideoMetaData;
