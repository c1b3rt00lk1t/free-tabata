import React, { useContext } from "react";
import FreeTabataContext from "../context/FreeTabataContext";


const CountdownButton = ({ type }) => {
  const context = useContext(FreeTabataContext);
  const countdown = context[type];
  return (
    <div className={`${type} countdownBtn `}>
        <div className="countdownBtnItems">{type.toUpperCase()}</div>
        <div className="countdownBtnItems">{`${String(Math.floor(countdown/60)).padStart(2,'0')}:${countdown%60}`}</div>
    </div>
  );
};

export default CountdownButton;
