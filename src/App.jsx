import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { MovieSearch, Home, GreetMe } from "./pages";


const App = () => {
  return (
    <>
    <Router>

      <div className="py-5 justify-evenly flex gap-4 bg-orange-300">
      <NavLink to="/" className="bg-red-300 px-5 py-2 rounded-full">
        Home
      </NavLink>
      <NavLink to="/MovieSearch" className="bg-blue-300 px-5 py-2 rounded-full">
        Movie
      </NavLink>
      <NavLink to="/greet" className="bg-blue-300 px-5 py-2 rounded-full">
        Greet Me
      </NavLink>

      </div>
      <Routes>
        <Route path="/MovieSearch" element={<MovieSearch />} />
        <Route path="/greet" element={<GreetMe />} />
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