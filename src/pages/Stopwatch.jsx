/* import { useEffect, useState } from "react";

const Stopwatch = () => {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>       
      </div>
    </div>
  );
};

export default Stopwatch; */

import { useEffect, useState } from "react";
const Stopwatch = () => {
  const [start, setStart] = useState(Date.now());
  const [now, setNow] = useState(0);
  const [running, setRunning] = useState(false);
  
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setNow(Date.now() - start);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);


  return (
    <>
      <div className="flex flex-col justify-center mx-auto font-sans max-w-fit">
        <h1 className="py-12 text-9xl">
          <span>{String(Math.floor(now / 100000)).padStart(2, "0")}</span>:
          <span>{String(Math.floor((now / 1000) % 100)).padStart(2, "0")}</span>
          :<span>{String(Math.floor((now / 10) % 100)).padStart(2, "0")}</span>
        </h1>
        <div className="flex flex-row justify-center gap-5">
          <button
            className="px-3 py-2 transition bg-gray-200 rounded hover:bg-blue-300"
            onClick={() => {
              setRunning(true);
            }}
          >
            start
          </button>
          <button
            className="px-3 py-2 transition bg-gray-200 rounded hover:bg-blue-300"
            onClick={() => {
              setRunning(false);
            }}
          >
            Stop
          </button>
          <button className="px-3 py-2 transition bg-gray-200 rounded hover:bg-blue-300"
            onClick={() => {
              // setStart(-1);
              // setNow(0);
              // setRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
