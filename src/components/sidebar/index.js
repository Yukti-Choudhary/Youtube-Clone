import React from "react";
import "./sidebar.css";
import { Tooltip } from "react-tooltip";
import { AiOutlineLike, AiOutlineFlag, AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdOutlineFeedback,
} from "react-icons/md";
import { GoHistory } from "react-icons/go";
import {
  PiVideoLight,
  PiShoppingBagOpen,
  PiMusicNoteLight,
  PiNewspaperClipping,
  PiLightbulbLight,
  PiCoatHangerLight,
} from "react-icons/pi";
import { SlFire } from "react-icons/sl";
import { TfiVideoClapper, TfiHelpAlt } from "react-icons/tfi";
import { LuGamepad2 } from "react-icons/lu";
import { BsTrophy } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, toggleSidebarPortal } from "../../utils/headerSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const toggle = useSelector((store) => store.header.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHomeBtn = () => {
    dispatch(toggleSidebar(false));
    dispatch(toggleSidebarPortal(false));
    navigate("/");
  };
  
  return (
    <nav className={toggle ? "sidebar " : "sidebar close"}>
      <ul>
        <li
          data-tooltip-content="Home"
          data-tooltip-id="tool"
          data-tooltip-delay-show={500}
          onClick={handleHomeBtn}
        >
          <AiOutlineHome size={22} />
          <span>Home</span>
        </li>
        <li
          data-tooltip-content="Liked Videos"
          data-tooltip-id="tool"
          data-tooltip-delay-show={500}
        >
          <AiOutlineLike size={22} />
          <span>Liked Videos</span>
        </li>
        <li
          data-tooltip-content="Subscriptions"
          data-tooltip-id="tool"
          data-tooltip-delay-show={500}
        >
          <MdOutlineSubscriptions size={22} />
          <span>Subscriptions</span>
        </li>
        <hr />
        <li>
          <MdOutlineVideoLibrary size={22} />
          <span>Library</span>
        </li>
        <li>
          <GoHistory size={22} />
          <span>History</span>
        </li>
        <li>
          <PiVideoLight size={22} />
          <span>Shorts</span>
        </li>
        <li>
          <MdOutlineWatchLater size={22} />
          <span>Watch Later</span>
        </li>
        <hr />
        <h6>Explore</h6>
        <li>
          <SlFire size={22} />
          <span>Trending</span>
        </li>
        <li>
          <PiShoppingBagOpen size={22} />
          <span>Shopping</span>
        </li>
        <li>
          <PiMusicNoteLight size={22} />
          <span>Music</span>
        </li>
        <li>
          <TfiVideoClapper size={22} />
          <span>Movies</span>
        </li>
        <li>
          <LuGamepad2 size={22} />
          <span>Gaming</span>
        </li>
        <li>
          <PiNewspaperClipping size={22} />
          <span>News</span>
        </li>
        <li>
          <BsTrophy size={22} />
          <span>Sports</span>
        </li>
        <li>
          <PiLightbulbLight size={22} />
          <span>Learning</span>
        </li>
        <li>
          <PiCoatHangerLight size={22} />
          <span>Fashion & Beauty</span>
        </li>

        <hr />
        <li>
          <IoSettingsOutline size={22} />
          <span>Settings</span>
        </li>
        <li>
          <AiOutlineFlag size={22} />
          <span>Report history</span>
        </li>
        <li>
          <TfiHelpAlt size={22} />
          <span>Help</span>
        </li>
        <li>
          <MdOutlineFeedback size={22} />
          <span>Send Feedback</span>
        </li>
        <hr />
        <p className="sidebar__footer">
          AboutPress Copyright <br /> Contact us Creators <br /> Advertise
          Developers <br /> <br />
          Terms Privacy Policy & Safety <br />
          How YouTube works <br />
          Test new features
        </p>
        <small>© 2023 Google LLC</small>
      </ul>
      <Tooltip place="bottom" id="tool" />
    </nav>
  );
};

export default Sidebar;
