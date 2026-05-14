import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActGenre } from "../store/gameSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const { games, actGenre, search } = useSelector((state) => state.games);

  const categories = [
    { name: "All games", slug: "all" },
    { name: "Action", slug: "action" },
    { name: "RPG", slug: "role-playing-games-rpg" },
    { name: "Puzzle", slug: "puzzle" },
    { name: "Shooter", slug: "shooter" },
    { name: "Adventure", slug: "adventure" },
    { name: "Indie", slug: "indie" },
    { name: "Platformer", slug: "platformer" },
  ];
  return (
    <>
      <aside className="fixed top-20 left-0 w-64 h-screen bg-[#242424] border-r border-white/10 overflow-y-auto p-4">
        <div className="flex flex-col gap-3 ">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => dispatch(setActGenre(category.slug))}
              className={
                actGenre === category.slug
                  ? "text-lime-400"
                  : "text-white cursor-pointer"
              }
            >
              {category.name}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
};

export default SideBar;
