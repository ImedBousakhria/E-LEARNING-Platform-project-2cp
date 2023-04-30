import React, { useState, useEffect, useRef } from "react";

const CountdownCircle = ({ duration, timeUp, setTimeUp }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const [timeLeft, setTimeLeft] = useState(duration * 1000);
  const [progress, setProgress] = useState(1);
  const requestRef = useRef();
  const startTimeRef = useRef();

  const animate = (time) => {
    if (timeLeft === 0) return;
    if (!startTimeRef.current) {
      startTimeRef.current = time;
    }
    const elapsedTime = time - startTimeRef.current;
    setTimeLeft(Math.max(duration * 1000 - elapsedTime, 0));
    setProgress(Math.max(1 - elapsedTime / (duration * 1000), 0));
    if (elapsedTime < duration * 1000) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      setTimeUp(true);
    }
  };

  useEffect(() => {
    startTimeRef.current = null;
    setTimeLeft(duration * 1000);
    setProgress(1);
  }, [timeUp]);

  useEffect(() => {
    if (timeUp) {
      cancelAnimationFrame(requestRef.current);
      setTimeLeft(0);
      setProgress(0);
      startTimeRef.current = null;
    } else {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [timeLeft, timeUp]);

  const formatTime = (time) => {
    const seconds = Math.ceil(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="mx-auto max-w-lg">
      <svg viewBox="0 0 100 100" className="h-24 w-24">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeWidth="10"
          stroke="#e6e6e6"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeWidth="10"
          stroke="hsla(229, 100%, 66%, 1)"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={`${circumference * (1 - progress)}`}
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="middle">
          {formatTime(timeLeft)}
        </text>
      </svg>
    </div>
  );
};

export default CountdownCircle;
