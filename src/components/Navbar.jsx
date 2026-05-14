import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActGenre, setSearch } from "../store/gameSlice";
import { Link } from "react-router";
import { Cart3 } from "react-bootstrap-icons";

const Navbar = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.games);
  const handleLogoClick = () => {
    dispatch(setActGenre("all"));
    dispatch(setSearch(""));
  };
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 bg-[#242424]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-8 z-50">
        <Link to="/">
          <div className="flex items-center gap-10">
            <h1
              className="text-4xl font-black text-lime-400"
              onClick={handleLogoClick}
            >
              playhop
            </h1>
          </div>
        </Link>
        <div className="w-150">
          <input
            type="text"
            placeholder="find game"
            value={search}
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
            className="w-full bg-[#3a3b37] text-white px-6 py-4 rounded-2xl outline-none border border-transparent focus:border-lime-400 transiltion"
          />
        </div>
        <div className="flex items-center gap-5">
          <Link to="/cart">
            <div className="relative cursor-pointer items-center justify-center mr-20">
              <Cart3
                size={28}
                className="text-white hover:text-lime-400 transition"
              />
              <span className="absolute -top-1 -right-2 bg-lime-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartItems.length}
              </span>
            </div>
          </Link>
          <button className="bg-lime-400 text-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition">
            Log in
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
