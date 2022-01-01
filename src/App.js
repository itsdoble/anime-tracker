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
  const [viewP, setViewP] = useState("width=device-width");

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

    let viewHeight = window.innerHeight;
    let viewWidth = window.innerWidth;
    // for build
    // let viewHeight = window.visualViewport.height;
    // let viewWidth = window.visualViewport.width;
    // for dev
    let dimensions = "width=" + viewWidth + "px, height=" + viewHeight + "px";
    setViewP(dimensions);
    console.log(dimensions);
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
        <meta name="viewport" content={viewP + ", initial-scale=1"} />
      </MetaTags>
      <div className="w-screen min-h-screen ">
        <Header />
        <div className="w-screen h-[3rem]"></div>
        <div className="w-screen min-h-[calc(100vh_-_7rem)] bg-pink-50 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/add" element={<Add />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <div className="w-screen h-16"></div>
        <Menu />
      </div>
    </Context.Provider>
  );
};

export default App;
