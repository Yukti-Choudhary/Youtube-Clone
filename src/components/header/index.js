import React from "react";
import "./header.css";
import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleProfileShow,
  toggleSidebar,
  toggleSidebarPortal,
} from "../../utils/headerSlice";
import { Link } from "react-router-dom";
import Search from "../search";

const Header = () => {
  const { name, photoURL } = useSelector((state) => state.auth.profile);

  const dispatch = useDispatch();

  const handleSidebarShow = () => {
    dispatch(toggleSidebar());
    dispatch(toggleSidebarPortal());
  };

  return (
    <div className="header">
      <div className="header__left">
        <RxHamburgerMenu
          size={40}
          className="menu"
          onClick={handleSidebarShow}
        />
        <Link to="/">
          <img src="/logo.png" alt="Youtube-Logo" title="Youtube Home" />
        </Link>
      </div> 

      <div className="header__center">
        <Search />
        <MdKeyboardVoice
          size={43}
          title="Search with your voice"
          className="mic"
        />
      </div>

      {name === "" ? (
        <div className="header__signedOut">
          <RxAvatar
            size={50}
            className="avatar"
            onClick={() => dispatch(toggleProfileShow())}
          />
        </div>
      ) : (
        <div className="header__right">
          <RiVideoAddLine size={40} title="Create" className="create" />
          <IoMdNotificationsOutline
            size={40}
            title="Notifications"
            className="notify"
          />

          <img
            src={photoURL}
            alt={name}
            onClick={() => dispatch(toggleProfileShow())}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
