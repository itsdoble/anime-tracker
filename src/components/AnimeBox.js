import React, { useContext } from "react";
import Context from "../context";

const AnimeBox = (props) => {
  const ctx = useContext(Context);
  const addToTracked = () => {
    let tracked;
    if (window.localStorage.getItem("tracked")) {
      tracked = JSON.parse(window.localStorage.getItem("tracked"));
    } else {
      tracked = {};
    }
    if (props.episodes) {
      tracked[props.title] = {
        episodes: props.episodes,
        type: "anime",
        img: props.image_url,
      };
    } else {
      tracked[props.title] = {
        chapters: props.chapters,
        type: "manga",
        img: props.image_url,
      };
    }

    ctx.setTrack(tracked);
    window.localStorage.setItem("tracked", JSON.stringify(tracked));
  };
  return (
    <div className="w-full h-70 bg-white flex flex-col justify-center items-center outline outline-1 outline-pink-500 p-2 rounded-sm">
      <img
        src={props.image_url}
        alt="anime pic"
        className="h-3/4 object-cover"
      />
      <h2 className="text-left w-full text-xl underline underline-offset-[3px] font-semibold mt-2 mb-4">
        {props.title}
      </h2>
      {props.episodes ? (
        <p className="font-semibold text-left w-full">
          Episodes:
          <span className="font-normal ">
            {props.episodes === 0 ? "Unknown" : props.episodes}
          </span>
        </p>
      ) : (
        <p className="font-semibold text-left w-full">
          Chapters:
          <span className="font-normal ">
            {props.chapters === 0 ? "Unknown" : props.chapters}
          </span>
        </p>
      )}
      <p className="font-semibold text-left w-full">
        Score:<span className="font-normal ">{props.score}</span>
      </p>
      <button
        className="bg-green-600 w-full p-1 text-white"
        onClick={addToTracked}
      >
        Track
      </button>
    </div>
  );
};

export default AnimeBox;
