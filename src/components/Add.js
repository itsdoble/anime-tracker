import React, { useState, useRef } from "react";
import AnimeBox from "./AnimeBox";

const Add = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [data, setData] = useState([]);
  const searchValue = useRef();
  const aOM = useRef();
  const setSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const search = (e) => {
    e.preventDefault();
    let url =
      "https://api.jikan.moe/v3/search/" +
      aOM.current.value +
      "?q=" +
      searchValue.current.value;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  };
  return (
    <div className="w-[95%] h-full m-auto flex flex-col justify-start items-center pt-4">
      <form className="w-full relative" onSubmit={search}>
        <i className="absolute top-2 left-2 fas fa-search w-[5%] "></i>
        <input
          type="text"
          className="w-3/4 h-7 rounded-l-sm indent-8"
          value={searchTerm}
          onChange={setSearch}
          ref={searchValue}
        />
        <select
          ref={aOM}
          id="aom"
          className="w-1/4 h-7 rounded-r-sm indent-2 bg-pink-300"
        >
          <option value="anime">Anime</option>
          <option value="manga">Manga</option>
        </select>
        <button className="w-full h-8 bg-pink-500 rounded-md text-white mt-2">
          Search
        </button>
      </form>

      <div className="w-full grid grid-cols-2 gap-2 pb-2">
        {data.length !== 0
          ? data.results
              .filter((e, i) => i <= 15)
              .map((entry) => {
                console.log(entry);
                return (
                  <AnimeBox
                    title={entry.title}
                    image_url={entry.image_url}
                    episodes={entry.episodes}
                    chapters={entry.chapters}
                    score={entry.score}
                  />
                );
              })
          : null}
      </div>
    </div>
  );
};

export default Add;
