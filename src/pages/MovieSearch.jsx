import { MovieCard } from "./../components";
import { useEffect, useState } from "react";

const MovieSearch = () => {
  const [Movies, setMovies] = useState([]);
  const [InputSearch, setInputSearch] = useState("");

  const API_URL = "http://www.omdbapi.com/?apikey=5c0d5fe6";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  // useEffect(() => {
  //   searchMovies("");
  // }, [InputSearch]);

  return (
    <>
      <div className="min-h-screen py-5 min-w-screen bg-blue-50">
        <h1 className="mb-8 text-3xl font-bold text-center">Online Movies</h1>

        <div className="mb-4 overflow-hidden text-center search">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchMovies(InputSearch);
            }}
          >
            <input
              className="p-4 rounded-sm"
              type="text"
              placeholder="Search for movies"
              value={InputSearch}
              onInput={(e) => {
                setInputSearch(e.target.value);
              }}
            />
            <button className="p-4 bg-blue-300 hover:bg-blue-500" type="submit">
              Search
            </button>
          </form>
        </div>
          <div className="grid max-w-4xl gap-8 mx-auto border md:grid-cols-3">
            {Movies.map((e) => (
              <MovieCard movie1={e} key={e.imdbID} />
            ))}
          </div>
{/*         {
        (Movies.Response === true) && (
          <div className="grid max-w-4xl gap-8 mx-auto border md:grid-cols-3">
            {Movies.Search.map((e) => (
              <MovieCard movie1={e} key={e.imdbID} />
            ))}
          </div>
        )}
        {!Movies.Response && <div>Not Found</div>} */}
      </div>
    </>
  );
};

export default MovieSearch;
