import React, { useEffect, useMemo, useState } from "react";
import "./home.css";
import { Sidebar, VideoContainer, SignIn, Skeleton } from "../../components";
import request from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../../utils/videoSlice";

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { name } = useSelector((state) => state.auth.profile);
  const { popularVideos } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const getPopularVideos = async () => {
    try {
      const { data } = await request("/videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 9,
        },
      });
      dispatch(addPopularVideos({ popularVideos: data.items }));
      setLoading(false);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLoading(false);
    }
  };
  const memoizedGetPopularVideos = useMemo(() => getPopularVideos, []);

  useEffect(() => {
    memoizedGetPopularVideos();
  }, [memoizedGetPopularVideos]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setModalShow(true);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {name === "" ? modalShow && <SignIn setModalShow={setModalShow} /> : null}
      <div className="home__container">
        <Sidebar />
        <div className="container-fluid home__main ">
          {loading ? <Skeleton /> : <VideoContainer videos={popularVideos} />}
          {error && (
            <h4>
              {error} :
              <br /> <br/>
              Looks like the daily limit of API key has been exhausted. Sorry for the inconvenience!
            </h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
