import React, { useRef, useState } from "react";
import "./categoriesBar.css";
import keywords from "../../constants/catagoriesList";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (value) => {
    setActiveElement(value);
  };

  const handleCarousal = (direction) => {
    const box = listRef.current;
    const slideWidth = box.clientWidth;

    if (direction === "previous") {
      setSlideNumber(slideNumber - 1);
      box.scrollLeft -= slideWidth;
    } else if (direction === "next") {
      setSlideNumber(slideNumber + 1);
      box.scrollLeft += slideWidth;
    }
  };

  return (
    <div className="categoriesBar">
      <span className={slideNumber === 0 ? "leftHide" : "left"}>
        <AiOutlineLeft
          className="icon"
          size={20}
          title="Previous"
          onClick={() => handleCarousal("previous")}
        />
      </span>
      <div className="categoriesBar__main" ref={listRef}>
        {keywords.map((item) => {
          return (
            <span
              className={activeElement === item.value ? "active" : "notActive"}
              key={item.id}
              onClick={() => handleClick(item.value)}
            >
              {item.value}
            </span>
          );
        })}
      </div>
      <span className="right">
        <AiOutlineRight
          className="icon"
          size={20}
          title="Next"
          onClick={() => handleCarousal("next")}
        />
      </span>
    </div>
  );
};

export default CategoriesBar;
