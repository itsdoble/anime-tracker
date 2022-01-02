import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-12 fixed top-0 left-0 bg-pink-500 grid place-items-center z-50">
      <Link to="/">
        <p className="font-kas text-white font font-semibold text-xl">
          ANIME TRACKER
        </p>
      </Link>
    </header>
  );
};

export default Header;
