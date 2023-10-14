import React, { useEffect, useMemo, useState } from "react";
import "./search.css";
import { TfiSearch } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import request from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { cacheSearch } from "../../utils/searchSlice";
import { addSearchVideos } from "../../utils/videoSlice";

const Search = () => {
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(true);

  const searchCache = useSelector((state) => state.search);
  const { searchVideos } = useSelector((state) => state.video);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getSearchResults = async () => {
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 4,
        q: input,
        type: "video",
      },
    });
    dispatch(addSearchVideos({ searchVideos: data.items }));
    setLoadingSearch(false);
  };

  const getSearchList = async () => {
    const res = await fetch(
      `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${input}`
    );
    const data = await res.json();
    setSearchList(data[1]);

    dispatch(
      cacheSearch({
        [input]: data[1],
      })
    );
  };

  const memoizedGetSearchResults = useMemo(() => getSearchResults, [input]);

  useEffect(() => {
    memoizedGetSearchResults();
  }, [memoizedGetSearchResults]);

  useEffect(() => {
    const i = setTimeout(() => {
      if (searchCache[input]) {
        setSearchList(searchCache[input]);
      } else {
        getSearchList();
      }
    }, 200);

    return () => clearTimeout(i);
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    navigate(`/search/${input}`, { state: { searchVideos, loadingSearch } });
  };

  const handleSearchList = (index) => {
    setSearchList([]);
    dispatch(addSearchVideos({ searchVideos: searchList[index] }));
    navigate(`/search/${searchList[index]}`, {
      state: { searchVideos, loadingSearch },
    });
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <TfiSearch size={22} title="Search" />
        </button>
      </form>

      <div className="search__list">
        <ul>
          {searchList?.map((list, index) => {
            return (
              <li key={index} onClick={() => handleSearchList(index)}>
                {list}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Search;
