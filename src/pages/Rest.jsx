import React from 'react'
import DefaultTimings from "../components/DefaultTimings";
import DisplayCountdown from "../components/DisplayCountdown";
import DoneButton from "../components/DoneButton";

const Rest = () => {
  return (
    <div className='verticalContainer'>
      <DisplayCountdown type='rest'/>
      <div className="horizontalContainer">
        <DefaultTimings type='rest' seconds={10}/>
        <DefaultTimings type='rest' seconds={20}/>
        <DefaultTimings type='rest' seconds={60}/>
      </div>
      <DoneButton/>
    </div>
  )
}

export default Rest