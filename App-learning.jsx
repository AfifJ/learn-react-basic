import React from "react";

import { useState, useEffect } from "react";
import { Article, Brand, Navbar, Feature, ShoppingPage } from "./components";

const App = () => {
/* first argument is variable, second is function relate to variable */
const [counter, setCounter] = useState(0);
  useEffect(() => {
    alert("p")
  }, [counter]);
  return (
    <>
      <div className="text-center m-auto mt-12">
        <button
          onClick={() => {
            setCounter((prev) => prev + 1);
          }}
          className="bg-blue-200 hover:bg-blue-400 px-4 py-3 rounded-md"
        >
          +
        </button>
        <h1 className="my-2">{counter}</h1>
        <button
          onClick={() => {
            setCounter((prev) => prev - 1);
          }}
          className="bg-blue-200 hover:bg-blue-400 px-4 py-3 rounded-md"
        >
          -
        </button>
      </div>
    </>
  );
};

export default App;

/* below is named hook, there is more: 
    Basic Hooks
        useState
        useEffect
        useContext

    Additional Hooks
        useReducer
        useCallback
        useMemo
        useRef
        useImperativeHandle
        useLayoutEffect
        useDebugValue
        useDeferredValue
        useTransition
        useId

    Library Hooks
        useSyncExternalStore
        useInsertionEffect
 */
/* 
const Person = (props) => {
  return (
    <>
      <div className="font-bold text-3xl mb-5">
        <h1>Name : {props.name}</h1>
        <h1>Last Name : {props.lastName}</h1>
        <h1>Age : {props.age} </h1>
      </div>
    </>
  );
};

const App = () => {
  const myName = "Rahel Anatasya";
  const issetName = true;
  return (
    <>
      <div className="text-center m-auto mt-12">
        <Person name={'John'} lastName = {'Wick'} age = {30}/>
        <Person name={'Tono'} lastName = {'Baba'} age = {34}/>
      </div>
    </>
  );
}; */

/* const App = () => {
  const myName = "Rahel Anatasya";
  const issetName = true;
  return (
    <>
    <div className="text-center m-auto mt-12">
    Hello,{" "}
        {issetName ? (
          <>
            {" "}
            <h1 className="font-bold"> {myName} </h1>
          </>
          ) : (
            <>
            <p> Something </p>
            </>
            )}
            <h2>2 + 2 = {2 + 2}</h2>
            </div>
            </>
            );
          }; */
