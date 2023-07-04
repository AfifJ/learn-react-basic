import React, { useRef } from "react";
import { useState } from "react";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const inputPrev = useRef(null);

  const taskHandler = (e) => {
    e.preventDefault();
    inputPrev.current = input;
  };

  return (
    <div className="my-8">
      <form onSubmit={taskHandler}>
        <div className="inline-block mx-96 mb-4">
          <input
            className="border-2"
            placeholder="What is your task?"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      {input && (
        <div className="text-center text-2xl font-bold">
          <h1>Your task is "{input}"</h1>
        </div>
      )}
      <div>Previous task : {inputPrev.current}</div>
    </div>
  );
};

export default ToDoList;
