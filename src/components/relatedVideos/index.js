import React, { useEffect, useState } from "react";
import "./relatedVideos.css";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";

const RelatedVideos = ({ video }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [views, setViews] = useState(null);
  const [duration, setduration] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const {
    snippet: { channelTitle, publishedAt, title, description },
    id: { videoId },
  } = video;

  useEffect(() => {
    const get_thumbnail = async () => {
      try {
        const { data } = await request("/videos", {
          params: {
            part: "snippet,contentDetails,statistics",
            id: videoId,
          },
        });
        setThumbnail(data.items[0].snippet.thumbnails.medium.url);
        setduration(data.items[0].contentDetails.duration);
        setViews(data.items[0].statistics.viewCount);
      } catch (error) {
        console.log(error.message);
      }
    };
    get_thumbnail();
  }, [videoId]);

  return (
    <Link to={`/watch/${videoId}`}>
      <div className="row row-col-2 relatedVideos">
        <div className="col-4 relatedVideos__image">
          <img src={thumbnail} loading="lazy" />
          <span>{_duration}</span>
        </div>
        <div className="col-8">
          <div className="relatedVideos__details">
            <p>{title}</p>
            <small>{channelTitle}</small>
            <small>
              {numeral(views).format("0.a")} views •{" "}
              {moment(publishedAt).fromNow()}
            </small>
            <small>{description}</small>
          </div>
        </div>
      </div>
      <hr />
    </Link>
  );
};

export default RelatedVideos;
