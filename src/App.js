import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Anime from "./components/Anime";
import Add from "./components/Add";
import Profile from "./components/Profile";
import Context from "./context.js";

const App = () => {
  const [name, setName] = useState("User");
  const [pic, setPic] = useState(
    "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
  );
  const [trackedA, setTracked] = useState({});
  const [viewH, setViewH] = useState("device-height");

  let contextOptions = {
    name: name,
    setName: setName,
    pic: pic,
    setPic: setPic,
    trackedA: trackedA,
    setTrack: setTracked,
  };

  useEffect(() => {
    //fix keyboard shifting viewport size on mobile
    let viewHeight = window.outerHeight + "px";
    setViewH(viewHeight);

    if (window.localStorage.getItem("name")) {
      setName(window.localStorage.getItem("name"));
    }
    if (window.localStorage.getItem("pic")) {
      setPic(window.localStorage.getItem("pic"));
    }
    if (window.localStorage.getItem("tracked")) {
      setTracked(JSON.parse(window.localStorage.getItem("tracked")));
    }
  }, []);
  return (
    <Context.Provider value={contextOptions}>
      <MetaTags>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content={"width=device-width,height=" + viewH + ", initial-scale=0.9"}
        />
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <link rel="manifest" href={process.env.PUBLIC_URL + "/manifest.json"} />
      </MetaTags>
      <div className="w-screen h-full">
        <Header />
        <div className="w-screen h-full bg-pink-50 relative pt-[3rem] pb-[4rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/add" element={<Add />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Menu />
      </div>
    </Context.Provider>
  );
};

export default App;
