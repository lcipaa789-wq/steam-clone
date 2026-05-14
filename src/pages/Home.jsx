import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchGames } from "../store/gameSlice";
import GameCard from "../components/GameCard";

const Home = () => {
  const dispatch = useDispatch();

  const { games, loading, search, actGenre } = useSelector(
    (state) => state.games,
  );
  const filteredGames = games.filter((game) => {
    const matchSearch = game.name.toLowerCase().includes(search.toLowerCase());
    const matchGenre =
      actGenre === "all" ||
      game.genres.some((genre) => genre.slug === actGenre);
    return matchGenre && matchSearch;
  });
  console.log(games);

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  if (loading) {
    return <h1 className="ml-20 font-bold">Loading...</h1>;
  }

  return (
    <section
      className="
        bg-[#242424]
        min-h-screen
        ml-20
        p-8
      "
    >
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-3
          gap-6
        "
      >
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default Home;
