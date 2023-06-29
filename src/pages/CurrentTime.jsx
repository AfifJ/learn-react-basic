import { useEffect, useState } from "react";

/* using setInterval */

const CurrentTime = () => {
  const timeFormat = (e) => {
    const numberFormat = (number) => String(number).padStart(2, 0);

    const numberStyle = `inline-block bg-blue-400 max-w-fit p-3 rounded mx-1`;
    return (
        <>
          <div className={numberStyle}>{numberFormat(e.getHours())}</div>:
          <div className={numberStyle}>{numberFormat(e.getMinutes())}</div>:
          <div className={numberStyle}>{numberFormat(e.getSeconds())}</div>
        </>
    );
  };

  let current = new Date();
  const [now, setNow] = useState(timeFormat(current));

  useEffect(() => {
    setInterval(() => {
      let current = new Date();
      setNow(timeFormat(current));
    }, 1000);
  }, []);

  return (
    <>
      <div className="mx-auto mt-32 font-mono font-bold text-8xl max-w-fit">{now}</div>
    </>
  );
};

export default CurrentTime;
