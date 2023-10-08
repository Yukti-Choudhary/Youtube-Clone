import React, { useEffect, useState } from "react";
import "./videoCard.css";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addChannelIcon, addDuration, addViews } from "../../utils/videoSlice";

const VideoCard = ({ video }) => {
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

  // const [views, setViews] = useState(null);
  // const [duration, setduration] = useState(null);
  // const [channelIcon, setchannelIcon] = useState(null);

  const dispatch = useDispatch();
  const { views, duration, channelIcon } = useSelector((state) => state.video);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || id;

  useEffect(() => {
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

        // setduration(items[0].contentDetails.duration);
        // setViews(items[0].statistics.viewCount);
        dispatch(addDuration({ duration: items[0].contentDetails.duration }));
        dispatch(addViews({ views: items[0].statistics.viewCount }));
      } catch (error) {
        console.log(error.message);
      }
    };
    if (!duration && !views) get_video_details();
  }, [_videoId, duration, views]);

  useEffect(
    () => {
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
          // setchannelIcon(items[0].snippet.thumbnails.default);
          dispatch(
            addChannelIcon({ channelIcon: items[0].snippet.thumbnails.default })
          );
        } catch (error) {
          console.log(error.message);
        }
      };
      !channelIcon && get_channel_icon();
    },
    [channelId],
    channelIcon
  );

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
