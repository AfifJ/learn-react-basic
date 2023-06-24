import { useState } from "react";
import { Welcome } from "../components";

const GreetMe = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  return (
    <>
      {/* <div className="px-4 py-5 mx-auto text-3xl font-bold text-yellow-100 bg-red-400 rounded-md max-w-fit">
        This page is under construction
      </div> */}
      <div className="mx-auto my-4 max-w-fit">
        <div>Put your name to get greeting</div>
        <form
          onSubmit={(e, name) => {
            e.preventDefault();
            setUser(e.target.children[0].defaultValue);
          }}
          className="flex flex-col my-2"
        >
          <input
            type="text"
            value={name}
            autoFocus 
            onInput={(e) => setName(e.target.value)}
            className="px-3 border-2 border-gray-700 rounded-xl"
          />
          <button type="submit">Submit</button>
        </form>
        {
          user && (
            <>
            <Welcome greetName={user} />
            <button className="w-full py-2 mt-4 border hover:bg-purple-300 rounded-3xl" onClick={() => {setUser(""); setName("")}}>Reset</button>
            </>
            )
          }
      </div>
    </>
  );
};

export default GreetMe;
