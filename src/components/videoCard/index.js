import React, { useEffect, useMemo, useState } from "react";
import "./videoCard.css";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const {
    id,
    snippet: {
      channelTitle,
      title,
      channelId,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || id;

  const get_video_details = async () => {
    try {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    } catch (error) {
      console.log(error.message);
    }
  };

  const memoizedGetVideoDetails = useMemo(() => get_video_details, []);

  useEffect(() => {
    memoizedGetVideoDetails();
  }, [memoizedGetVideoDetails, _videoId]);

  const get_channel_icon = async () => {
    try {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    } catch (error) {
      console.log(error.message);
    }
  };

  const memoizedGetChannelIcon = useMemo(() => get_channel_icon, []);

  useEffect(() => {
    memoizedGetChannelIcon();
  }, [memoizedGetChannelIcon, channelId]);

  return (
    <Link to={`/watch/${_videoId}`}>
      <div className="video">
        <div className="video__top">
          <img src={medium.url} alt={title} />
          <span>{_duration}</span>
        </div>

        <div className="video__bottom">
          <div className="video__channel">
            <img src={channelIcon?.url} alt={channelTitle} />
          </div>

          <div className="video__details">
            <p className="video__title">{title}</p>
            <p className="video__channelName">{channelTitle}</p>
            <span>
              {numeral(views).format("0.a")} views •{" "}
              {moment(publishedAt).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
