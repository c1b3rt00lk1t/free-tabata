import React from "react";
import ControlsPlusMinus from "../components/ControlsPlusMinus";
import DefaultTimings from "../components/DefaultTimings";
import DisplayCountdown from "../components/DisplayCountdown";
import DoneButton from "../components/DoneButton";

const Prepare = () => {
  return (
    <div className="verticalContainer">
      <div className="verticalContainer height">
        <DisplayCountdown type="prepare" />
      </div>
      <div className="horizontalContainer">
        <DefaultTimings type="prepare" seconds={0} />
        <DefaultTimings type="prepare" seconds={10} />
        <DefaultTimings type="prepare" seconds={30} />
      </div>
      <div className="horizontalContainer controlPlusMinusContainer">
        <ControlsPlusMinus type="prepare" sign="+1" />
        <ControlsPlusMinus type="prepare" sign="-1" />
      </div>
      <DoneButton />
    </div>
  );
};

export default Prepare;
