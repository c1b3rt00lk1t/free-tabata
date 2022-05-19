import React, { useContext } from "react";
import FreeTabataContext from "../context/FreeTabataContext";
import { useNavigate } from 'react-router-dom'


const CountdownButton = ({ type }) => {
  // Getting the type from the context
  const context = useContext(FreeTabataContext);
  const countdown = context[type];

  // Preparing to navigate in case of a click
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${type}`)
  };

  return (
    <div onClick={handleNavigate} className={`${type} countdownBtn `}>
        <div className="countdownBtnItems">{type.toUpperCase()}</div>
        <div className="countdownBtnItems">{`${String(Math.floor(countdown/60)).padStart(2,'0')}:${String(countdown%60).padStart(2,'0')}`}</div>
    </div>
  );
};

export default CountdownButton;
