import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { MovieSearch, Home, GreetMe, Timer } from "./pages";


const App = () => {
  return (
    <>
    <Router>

      <div className="flex gap-4 py-5 bg-orange-300 justify-evenly">
      <NavLink to="/" className="px-5 py-2 bg-red-300 rounded-full">
        Home
      </NavLink>
      <NavLink to="/movie-search" className="px-5 py-2 bg-blue-300 rounded-full">
        Movie
      </NavLink>
      <NavLink to="/greet" className="px-5 py-2 bg-blue-300 rounded-full">
        Greet Me
      </NavLink>
      <NavLink to="/timer" className="px-5 py-2 bg-blue-300 rounded-full">
        Timer
      </NavLink>

      </div>
      <Routes>
        <Route path="/movie-search" element={<MovieSearch />} />
        <Route path="/greet" element={<GreetMe />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/" element={<Home />}  />
      </ Routes>
    </Router>

    </>
  );
};

export default App;

/* 
  Best Practice:
  1. Use index js in components and pages with import each then export instead export in a line (it just more easy to understand)
  2. 
*/