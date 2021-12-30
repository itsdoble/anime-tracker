import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Anime from "./components/Anime";
import Add from "./components/Add";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="w-screen min-h-screen ">
      <Header />
      <div className="w-screen h-[3rem]"></div>
      <div className="w-screen h-[calc(100vh_-_7rem)] z-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/add" element={<Add />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Menu />
    </div>
  );
};

export default App;
