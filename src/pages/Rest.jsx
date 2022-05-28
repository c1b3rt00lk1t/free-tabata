import React from "react";
import DefaultTimings from "../components/DefaultTimings";
import DisplayCountdown from "../components/DisplayCountdown";
import DoneButton from "../components/DoneButton";
import ControlsPlusMinus from "../components/ControlsPlusMinus";

const Rest = () => {
  return (
    <div className="verticalContainer">
      <div className="verticalContainer height">
        <DisplayCountdown type="rest" />
      </div>
      <div className="horizontalContainer">
        <DefaultTimings type="rest" seconds={10} />
        <DefaultTimings type="rest" seconds={20} />
        <DefaultTimings type="rest" seconds={60} />
      </div>
      <div className="horizontalContainer controlPlusMinusContainer">
        <ControlsPlusMinus type="rest" sign="+1" />
        <ControlsPlusMinus type="rest" sign="-1" />
      </div>
      <DoneButton />
    </div>
  );
};

export default Rest;
