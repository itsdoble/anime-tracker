import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div className="menubar w-screen h-16 fixed bottom-0 left-0 bg-pink-100 grid grid-cols-3 place-items-center">
      <Link to="/anime">
        <button
          className={
            splitLocation[1] === "anime"
              ? "text-pink-500"
              : "" + " rounded-full p-2 active:text-pink-400"
          }
        >
          <i className="fas fa-photo-video text-2xl"></i>
          <p>Anime</p>
        </button>
      </Link>
      <Link to="/add">
        <button
          className={
            splitLocation[1] === "add"
              ? "text-pink-500"
              : "" + " rounded-full p-2 active:text-pink-400"
          }
        >
          <i className="fas fa-plus text-2xl"></i>
          <p>Add</p>
        </button>
      </Link>
      <Link to="/profile">
        <button
          className={
            splitLocation[1] === "profile"
              ? "text-pink-500"
              : "" + " rounded-full p-2 active:text-pink-400"
          }
        >
          <i className="fas fa-user-circle text-2xl"></i>
          <p>Profile</p>
        </button>
      </Link>
    </div>
  );
};

export default Menu;
