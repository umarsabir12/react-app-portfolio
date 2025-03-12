import React, { useEffect, useState } from "react";
import '../../styles/StopWatch.css';

export default function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    
    useEffect(() => {
        let intervalId;
    
        if (isRunning) {
            console.log("Starting timer...");
          intervalId = setInterval(() => {
            setTime((prevTime) => prevTime + 10); // Increment time by 10ms
          }, 10);
        }
    
        return () =>{
            console.log("Cleaning up...");
            clearInterval(intervalId);
        } 
            
      }, [isRunning]);

    function start() {
        setIsRunning(true);
    }
    
    function stop() {
        setIsRunning(false);
    }
    function reset() {
        setTime(0);
        setIsRunning(false);
    }

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600000); // 1 hour = 3,600,000ms
        const minutes = Math.floor((time % 3600000) / 60000); // 1 minute = 60,000ms
        const seconds = Math.floor((time % 60000) / 1000); // 1 second = 1,000ms
        const milliseconds = Math.floor((time % 1000) / 10); // Convert to 2-digit milliseconds
    
        return `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
          .toString()
          .padStart(2, "0")}`;
      };

    return (
        <div className="stopwatch">
          <h1>StopWatch</h1>
          <div className="time">{formatTime(time)}</div>
          <div className="controls">
            {!isRunning ? (
              <button onClick={start}>Start</button>
            ) : (
              <button onClick={stop}>Stop</button>
            )}
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      );
}
