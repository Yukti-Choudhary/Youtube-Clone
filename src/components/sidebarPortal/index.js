import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./sidebarPortal.css";
import Sidebar from "../sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggleSidebar, toggleSidebarPortal } from "../../utils/headerSlice";

const SidebarPortal = () => {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebarPortal());
    dispatch(toggleSidebar());
  };

  useEffect(() => {
    return () => {
      dispatch(toggleSidebar(true));
    };
  }, [dispatch]);

  return ReactDOM.createPortal(
    <div className="sidebarPortal">
      <div className="sidebarPortal__header">
        <RxHamburgerMenu size={40} className="menu" onClick={handleSidebar} />
        <img src="/logo.png" alt="Youtube-Logo" title="Youtube Home" />
      </div>

      <div className="sidebarPortal__list">
        <Sidebar />
      </div>
    </div>,
    document.body
  );
};

export default SidebarPortal;
