import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { CustomNavLink } from "./components";
import { MovieSearch, Home, GreetMe, Stopwatch, CurrentTime, ToDoList } from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <div className="flex gap-4 py-5 bg-orange-300 justify-evenly">
          <NavLink to="/" className="px-5 py-2 bg-red-300 rounded-full">
            Home
          </NavLink>
          <CustomNavLink to="/movie-search">Movie</CustomNavLink>
          <CustomNavLink to="/greet">Greet Me</CustomNavLink>
          <CustomNavLink to="/current-time">Current Time </CustomNavLink>
          <CustomNavLink to="/timer">Stopwatch</CustomNavLink>
          <CustomNavLink to="/to-do-list">To Do List</CustomNavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-search" element={<MovieSearch />} />
          <Route path="/greet" element={<GreetMe />} />
          <Route path="/timer" element={<Stopwatch />} />
          <Route path="/current-time" element={<CurrentTime />} />
          <Route path="/to-do-list" element={<ToDoList />} />
        </Routes>
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
