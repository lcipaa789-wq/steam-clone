import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { addToCart } from "../store/cartSlice";

const GameDetails = () => {
  const { id } = useParams();
  const { games } = useSelector((state) => state.games);
  const game = games.find((g) => g.id === Number(id));
  if (!game) {
    return <h1 className="ml-40"> Loading... </h1>;
  }
  const dispatch = useDispatch();
  return (
    <>
      <section className="min-h-screen text-white ml-20 max-w-7xl">
        <Link to="/" className="text-lime-400 font-bold">
          {" "}
          Back
        </Link>
        <div className="my-8 rounded-3xl overflow-hidden">
          <img
            src={game.background_image}
            alt={game.name}
            className="w-full h-112.5 object-cover "
          />
        </div>
        <h1 className="text-5xl font-black mt-8">{game.name}</h1>
        <div className="flex gap-4 mt-4">
          <span className="bg-green-500  h-16 px-6 rounded-xl font-bold flex items-center ">
            ⭐{game.rating}
          </span>
          <span className="bg-white/10 h-16 px-6 rounded-xl flex items-center">
            {game.released}
          </span>
          <button
            className="bg-lime-400 text-black h-16 px-8 rounded-2xl font-black text-xl hover:scale-105 transition "
            onClick={() => dispatch(addToCart(game))}
          >
            + Add
          </button>
        </div>

        <div className="flex gap-3 mt-6 flex-wrap">
          {game.genres?.map((genre) => (
            <span className="bg-[#333] px-4 py-2 rounded-xl">{genre.name}</span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8  w-full">
          {game.short_screenshots?.slice(1).map((s) => (
            <img
              key={s.id}
              src={s.image}
              alt={game.name}
              className="h-40  w-full object-cover rounded-2xl "
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default GameDetails;
