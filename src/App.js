import React from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer, useCountdown } from "react-countdown-circle-timer";
import { useState } from "react";

import "./style.css";


function App() {
  const stratTime = Date.now() / 1000; 
  const endTime = stratTime + 243248; 

  const remainingTime = endTime - stratTime;

  var renderTime = ({ remainingTime }) => {
    if (remainingTime === 0||remainingTime<0) {
      return <div className="timer">Too lale...</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };
  
  const options = [10, 20, 30, 40, 50];
  
 const [time,settime]=useState(10);
 const [actual,setactual]=useState(10);
  
  const SetlectReset = () => {
    return (
      <div style={{ display: "flex" }}>
        <select onChange={(e) =>{settime(e.target.value);
        }} value={actual}>
          {options.map((opt) => (
            <option value={opt} key={opt}>
              {opt + " sec"}
              {console.log(time)}
            </option>
          ))}
        </select>
        <button onClick={onClickReset}>Reset</button>
      </div>
    );
  };
  















  const onClickReset = () => {
    setactual(time);
    renderTime=actual;
  };

  return (
    <div className="App">
      <h1>
        <a
          href="https://www.reactlabs.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Labs
        </a>
        <br />
        ReactJS Assignment
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={actual}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          initialRemainingTime={remainingTime % 60}
          onComplete={()=> ({shouldRepeat:true,delay:1})}
        >
          {renderTime}
        </CountdownCircleTimer>
        <SetlectReset />
        <h3>Can you get this reset button to work?</h3>
        <h4>
          The reset button should reset as per the time selected in the dropdown
        </h4>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
