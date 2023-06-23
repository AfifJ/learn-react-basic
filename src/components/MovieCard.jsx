import React, { useState } from "react";

const MovieCard = ({ movie1 }) => {
  return (
    <div className="relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="">
        <a className="cursor-pointer">
          <img
            className="object-cover w-full rounded-t-lg h-96"
            src={movie1.Poster}
            alt={movie1.Title}
          />
          <div className="absolute top-0 z-20 w-full h-full transition-opacity duration-300 ease-out opacity-0 pt-auto basis-1 text-slate-50 hover:opacity-100">
            <div className="absolute bottom-0 z-10 w-full p-5 px-4 py-2 font-bold bg-black rounded-lg h-fit bg-opacity-70">
              <h5 className="inline-block h-20 mb-2 text-2xl font-bold tracking-tight">
                {movie1.Title}
              </h5>
              <p className="mb-3 font-normal">{movie1.Year}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default MovieCard;
