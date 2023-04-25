import { useEffect, useState } from "react";

function CountdownCircle({ seconds, onTimeout }) {
  const [isRunning, setIsRunning] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);

  useEffect(() => {
    if (isRunning && secondsRemaining > 0) {
      const intervalId = setInterval(() => {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (isRunning && secondsRemaining === 0) {
      onTimeout();
    }
  }, [isRunning, secondsRemaining, onTimeout]);

  const start = () => setIsRunning(true);

  const calculateStrokeDashoffset = () => {
    const circumference = 2 * Math.PI * 18;
    const percentRemaining = secondsRemaining / seconds;
    return circumference - percentRemaining * circumference;
  };

  return (
    <div
      className="countdown w-20 h-20 relative cursor-pointer"
      onClick={start}
    >
      <div className="countdown-number absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
        {secondsRemaining}
      </div>
      <svg className="absolute w-full h-full top-0 left-0">
        <circle
          className="stroke-current stroke-2 text-black"
          r="18"
          cx="20"
          cy="20"
          style={{
            strokeDasharray: 2 * Math.PI * 18,
            strokeDashoffset: calculateStrokeDashoffset(),
            transition: "stroke-dashoffset 1s linear"
          }}
        ></circle>
      </svg>
    </div>
  );
}

export default CountdownCircle;