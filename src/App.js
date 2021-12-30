import React, { useEffect, useState } from "react";
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

  let contextOptions = {
    name: name,
    setName: setName,
    pic: pic,
    setPic: setPic,
  };

  useEffect(() => {
    if (window.localStorage.getItem("name")) {
      setName(window.localStorage.getItem("name"));
    }
    if (window.localStorage.getItem("pic")) {
      setPic(window.localStorage.getItem("pic"));
    }
  }, []);
  return (
    <Context.Provider value={contextOptions}>
      <div className="w-screen min-h-screen ">
        <Header />
        <div className="w-screen h-[3rem]"></div>
        <div className="w-screen h-[calc(100vh_-_7rem)] bg-pink-50 relative">
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
