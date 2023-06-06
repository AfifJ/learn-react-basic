import React from "react";

const MovieCard = ({ movie1 }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <div className="x-xl">
        <a href="#">
          <img
            className="rounded-t-lg object-cover h-96"
            src={movie1.Poster}
            alt={movie1.Title}
          />
        </a>
      </div>
      <div className="p-5 basis-1">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie1.Title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie1.Year}
        </p>
      </div>
    </div>
  );
};
export default MovieCard;
