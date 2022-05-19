import React from "react";
import DefaultTimings from "../components/DefaultTimings";
import DisplayCountdown from "../components/DisplayCountdown";
import DoneButton from "../components/DoneButton";

const Prepare = () => {
  return (
    <div className='verticalContainer'>
      <DisplayCountdown type='prepare'/>
      <div className="horizontalContainer">
        <DefaultTimings type='prepare' seconds={0}/>
        <DefaultTimings type='prepare' seconds={10}/>
        <DefaultTimings type='prepare' seconds={30}/>
      </div>
      <DoneButton/>
    </div>
  );
};

export default Prepare;
