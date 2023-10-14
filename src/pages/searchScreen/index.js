import React from "react";
import "./searchScreen.css";
import { RelatedVideos, Sidebar } from "../../components";
import { useLocation } from "react-router-dom";

const SearchScreen = () => {
  const location = useLocation();
  const searchVideos = location.state?.searchVideos || [];
  const loading = location.state?.loadingSearch || false;
  const searchError = location.state?.searchError || null;

  return (
    <div className="search">
      <Sidebar />
      <div className="container search__videoList">
        {loading ? (
          <center>
            <iframe
              title="loading"
              src="https://giphy.com/embed/KG4PMQ0jyimywxNt8i"
              width="110"
              height="110"
              className="giphy-embed"
            ></iframe>
          </center>
        ) : (
          searchVideos.length > 0 &&
          searchVideos?.map((video) => {
            return <RelatedVideos video={video} key={video.id.videoId} />;
          })
        )}
        {searchError && <h4>{searchError}</h4>}
      </div>
    </div>
  );
};

export default SearchScreen;
