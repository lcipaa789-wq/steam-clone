import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addToCart } from "../store/cartSlice";

const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative rounded-2xl overflow-hidden hover:scale-105 duration-300">
      <Link to={`/game/${game.id}`}>
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-60 object-cover"
        />
      </Link>

      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
        <Link
          to={`/game/${game.id}`}
          className="bg-black/20 backdrop-blur-sm px-4 py-3 rounded-2xl max-w-[75%]"
        >
          <div className="flex items-center gap-2 mb-1">
            <p className="text-white text-sm font-bold">⭐ {game.rating}</p>
          </div>

          <h2 className="text-white text-sm font-extrabold tracking-wide leading-tight hover:text-lime-400 duration-300">
            {game.name}
          </h2>
        </Link>

        <button
          onClick={() => dispatch(addToCart(game))}
          className="bg-lime-400 text-black min-w-12 h-12 rounded-2xl font-black text-2xl hover:scale-110 transition z-10"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GameCard;
