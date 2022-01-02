import React, { useContext, useState } from "react";
import Context from "../context";
import AnimeListItem from "./AnimeListItem";
import NoData from "./NoData";
const Anime = () => {
  const [dummy, setDummy] = useState(1);
  let animeArr = [];
  const ctx = useContext(Context);
  const animeObj = ctx.trackedA;
  for (const prop in animeObj) {
    animeArr.push(animeObj[prop]);
  }
  console.log(animeArr);

  return (
    <div className="w-full min-h-full pt-4 flex flex-col justify-center items-center gap-4">
      <div className="w-[95%] border-b-2 border-pink-600 text-xl text-pink-500 font-semibold">
        {ctx.name}'s Anime List
      </div>
      {animeArr.length !== 0 ? (
        animeArr.map((entry, index) => {
          return (
            <AnimeListItem
              key={index}
              id={index}
              data={entry}
              dummy={dummy}
              setDummy={setDummy}
            />
          );
        })
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Anime;
