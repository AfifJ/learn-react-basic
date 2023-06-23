import { MovieCard } from "./../components";
import { useEffect, useState } from "react";

const MovieSearch = () => {
  const API_URL = "http://www.omdbapi.com/?apikey=5c0d5fe6";
  const [Movies, setMovies] = useState([]);
  const [InputSearch, setInputSearch] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("home");
  }, []);

  return (
    <>
      <div className="min-w-screen min-h-screen bg-blue-50 py-5">
        <h1 className="text-3xl font-bold text-center mb-8">Online Movies</h1>

        <div className="search text-center overflow-hidden mb-4">
          <input
            className="p-4 rounded-sm"
            type="text"
            placeholder="Search for movies"
            value={InputSearch}
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
          />
          <button
            className="bg-blue-300 hover:bg-blue-500 p-4"
            onClick={() => {
              searchMovies(InputSearch);
            }}
          >
            Search
          </button>
        </div>

        <div className="mx-auto grid gap-8 max-w-4xl md:grid-cols-3 border">
          {Movies.map((e) => (
            <MovieCard movie1={e} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieSearch;
