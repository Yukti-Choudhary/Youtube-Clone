import React from "react";
import "./skeleton.css";
import { useSelector } from "react-redux";

const Skeleton = () => {
  const toggle = useSelector((store) => store.header.toggle);

  return (
    <div className={toggle ? "videoContainer" : "closed"}>
      <div className="row">
        {new Array(6).fill(null).map((item, index) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
              <div className="skeleton">
                <div className="skeleton__thumbnail"></div>
                <div className="skeleton__footer">
                  <span className="skeleton__channelURL"></span>
                  <div className="skeleton__details">
                    <div className="skeleton__title"></div>
                    <div className="skeleton__channelName"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skeleton;
