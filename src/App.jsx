import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { MovieSearch, Home } from "./pages";


const App = () => {
  return (
    <>
    <Router>

      <NavLink to="/MovieSearch" className="bg-blue-500 px-5 py-2 rounded-full">
        Movie
      </NavLink>
      <NavLink to="/" className="bg-red-500 px-5 py-2 rounded-full">
        Home
      </NavLink>
      <Routes>
        <Route path="/MovieSearch" element={<MovieSearch />} />
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