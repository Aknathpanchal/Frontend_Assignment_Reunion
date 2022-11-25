import React from "react";
// import link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-violet-700 text-4xl lg:text-[48px] font-semibold">
            LOGO
          </h1>
        </Link>

        <Link to="/">Rent</Link>

        <Link className="hover:text-violet-900 transition" to="/">
          Buy
        </Link>

        <Link className="hover:text-violet-900 transition" to="/">
          Sell
        </Link>

        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="/">
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to="/"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
