import React from "react";
import { useState } from "react";
import { Article, Brand, Navbar, Feature, ShoppingPage } from "./components";

function App() {
  let myName = "Rahel Anatasya J";
  return (
    <>
      <Article />
      <Brand />
      <Navbar />
      <Feature />
      <p className="italic">Test using react and tailwindcss</p>
      <h1 className="text-2xl font-bold">Hello, {myName}</h1>
      <br />
      <br />
      <ShoppingPage />
    </>
  );
}

export default App;
