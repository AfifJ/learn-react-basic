import { useEffect, useState } from "react";
const Stopwatch = () => {
  const [now, setNow] = useState(0);

  function handleStart() {
    const start = Date.now();
    setNow(Date.now() - start);

    setInterval(() => {
      // Update the current time every 10ms.
      setNow(Date.now() - start);
    }, 10);
  }

  return (
    <>
      <div className="mx-auto font-sans text-3xl text-center max-w-fit">
        <h1>Now: {(now / 1000).toFixed(2)}</h1>
        <button className="px-3 py-2 transition bg-gray-200 rounded hover:bg-blue-300" onClick={handleStart}>start</button>
        {now !== 0 && (
          <>
            <h1>I don't know how to stop</h1>
          </>
        )}
      </div>
    </>
  );
};

export default Stopwatch;
