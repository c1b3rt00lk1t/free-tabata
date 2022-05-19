import React from 'react'
import DefaultTimings from "../components/DefaultTimings";
import DisplayCountdown from "../components/DisplayCountdown";
import DoneButton from "../components/DoneButton";

const Work = () => {
  return (
    <div className='verticalContainer'>
      <DisplayCountdown type='work'/>
      <div className="horizontalContainer">
        <DefaultTimings type='work' seconds={10}/>
        <DefaultTimings type='work' seconds={20}/>
        <DefaultTimings type='work' seconds={60}/>
      </div>
      <DoneButton/>
    </div>
  )
}

export default Work