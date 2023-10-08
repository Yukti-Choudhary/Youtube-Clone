import React from "react";
import "./profile.css";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineRight, AiOutlineDollarCircle } from "react-icons/ai";
import {
  MdPersonalVideo,
  MdAppBlocking,
  MdOutlineLocationOn,
  MdOutlineFeedback,
} from "react-icons/md";
import { BsPlayBtn, BsArrowBarRight } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { GoMoon } from "react-icons/go";
import { HiLanguage } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiHelpAlt } from "react-icons/tfi";
import { FaRegKeyboard } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleProfileShow } from "../../utils/headerSlice";
import { login, logout } from "../../utils/authSlice";

const Profile = () => {
  const profileShow = useSelector((store) => store.header.profileShow);
  const { name, photoURL, email } = useSelector((state) => state.auth.profile);

  const dispatch = useDispatch();

  return (
    <nav
      className={profileShow ? "profile" : " open"}
      onClick={() => dispatch(toggleProfileShow(false))}
    >
      <div className="profile__main">
        {name === "" ? (
          <>
            <RxAvatar size={50} className="avatar" />
            <span className="profile__header">
              User Name
              <br />
              <small>useremail@gmail.com</small>
            </span>
          </>
        ) : (
          <>
            <img src={photoURL} alt={name} />
            <span className="profile__header">
              {name}
              <br />
              <small>{email}</small>
            </span>
          </>
        )}
      </div>
      <hr />
      <ul>
        <li>
          <MdPersonalVideo size={22} />
          <span>Create a channel</span>
        </li>
        <li>
          <BsPlayBtn size={22} />
          <span>Youtube Studio</span>
        </li>
        <li>
          <BsArrowBarRight size={22} />
          <span>
            Switch account
            <AiOutlineRight className="right__icon" />
          </span>
        </li>
        <li>
          <RxAvatar size={22} />
          {name === "" ? (
            <span onClick={() => dispatch(login())}>Sign In</span>
          ) : (
            <span onClick={() => dispatch(logout())}>Sign Out</span>
          )}
        </li>
        <hr />
        <li>
          <AiOutlineDollarCircle size={22} />
          <span>Purchases and memberships</span>
        </li>
        <li>
          <ImProfile size={22} />
          <span>Your data in Youtube</span>
        </li>
        <hr />
        <li>
          <GoMoon size={22} />
          <span>
            Appearance: Device theme
            <AiOutlineRight className="right__icon" />
          </span>
        </li>
        <li>
          <HiLanguage size={22} />
          <span>
            Language: English
            <AiOutlineRight className="right__icon" />
          </span>
        </li>
        <li>
          <MdAppBlocking size={22} />
          <span>
            Restricted Mode: Off
            <AiOutlineRight className="right__icon" />
          </span>
        </li>
        <li>
          <MdOutlineLocationOn size={22} />
          <span>
            Location: India
            <AiOutlineRight className="right__icon" />
          </span>
        </li>
        <li>
          <FaRegKeyboard size={22} />
          <span>Keyboard shortcuts</span>
        </li>
        <hr />
        <li>
          <IoSettingsOutline size={22} />
          <span>Settings</span>
        </li>
        <hr />
        <li>
          <TfiHelpAlt size={22} />
          <span>Help</span>
        </li>
        <li>
          <MdOutlineFeedback size={22} />
          <span>Send feedback</span>
        </li>
      </ul>
    </nav>
  );
};

export default Profile;
