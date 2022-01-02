import React, { useContext, useEffect, useState } from "react";
import Context from "../context";
const AnimeListItem = (props) => {
  const ctx = useContext(Context);

  let percent = 0;
  const [completedPercentage, setPercentage] = useState(0);

  useEffect(() => {
    if (ctx.trackedA[props.data.title]) {
      percent = Math.round(
        (ctx.trackedA[props.data.title]["completed"] / props.data.episodes) *
          100
      );
      setPercentage(percent + "%");
    }
  }, [props.dummy]);

  const addCh = () => {
    let current = ctx.trackedA;
    let plus = current[props.data.title]["completed"] + 1;
    current[props.data.title]["completed"] = plus;
    ctx.setTrack(current);
    props.setDummy(Math.random());
    window.localStorage.setItem("tracked", JSON.stringify(current));
  };
  const rmCh = () => {
    let current = ctx.trackedA;
    let minus = current[props.data.title]["completed"] - 1;
    current[props.data.title]["completed"] = minus;
    ctx.setTrack(current);
    props.setDummy(Math.random());
    window.localStorage.setItem("tracked", JSON.stringify(current));
  };
  const del = () => {
    let current = ctx.trackedA;
    delete current[props.data.title];
    ctx.setTrack(current);
    props.setDummy(Math.random());
    window.localStorage.setItem("tracked", JSON.stringify(current));
  };
  return (
    <div className="w-[95%] p-2 grid grid-cols-12 gap-2 outline outline-pink-500 rounded-lg">
      <img
        src={props.data.img}
        alt="anime pic"
        className={
          "w-full col-span-4 m-auto outline outline-gray-500" + props.dummy
        }
      />
      <div className="col-span-7 grid grid-cols-2 gap-2">
        <h2 className="font-bold">{props.data.title}</h2>
        <p className="font-semibold col-span-2">
          Completed:{" "}
          <p className="font-normal">
            <span>{props.data.completed}</span> out of{" "}
            <span>{props.data.episodes}</span>
          </p>
        </p>
        <div className="w-full h-3 rounded-lg outline outline-1 outline-pink-500 overflow-hidden col-span-2">
          <div
            className={"h-full bg-pink-500 transition-[width]"}
            style={{ width: completedPercentage }}
          ></div>
        </div>
        <div className="col-span-2 flex w-full h-8 gap-2 text-white ">
          <button
            className="rounded-sm w-full h-full bg-green-500 p-2 [line-height:100%]"
            onClick={addCh}
          >
            +
          </button>
          <button
            className="rounded-sm w-full h-full bg-blue-500 p-2 [line-height:100%]"
            onClick={rmCh}
          >
            -
          </button>
          <button
            className="rounded-sm w-full h-full bg-red-500 p-2 [line-height:100%]"
            onClick={del}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeListItem;
