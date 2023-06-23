import { useState } from "react";
import { Welcome } from "../components";

const GreetMe = () => {
  const [name, setName] = useState("");
  const [User, setUser] = useState("");
  return (
    <>
      <div className="py-5 mx-auto text-3xl bg-red-400 text-yellow-100 font-bold rounded-md px-4 max-w-fit">
        This page is under construction
      </div>
      <div className="mx-auto max-w-fit my-4">
        <div>Put your name to get greeting</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setUser(name);
          }}
          className="flex flex-col my-2"
        >
          <input
            type="text"
            value={name}
            onInput={(e) => setName(e.target.value)}
            className="border-2 border-gray-700 rounded-xl px-3"
          />
          <button type="submit">Submit</button>
          <Welcome name={name} />
        </form>
      </div>
    </>
  );
};

export default GreetMe;
