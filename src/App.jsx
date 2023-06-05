import React from "react";
import { useState } from "react";
import { Article, Brand, Navbar, Feature } from "./components";

function App() {
  let myName = "Afif";
  return (
    <>
      <Article />
      <Brand />
      <Navbar />
      <Feature />
      <p className="italic">Test using react and tailwindcss</p>
      <h1 className="text-2xl font-bold">Hello, {myName}</h1>
    </>
  );
}

export default App;
