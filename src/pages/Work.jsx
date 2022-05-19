import React from 'react'
import DefaultTimings from "../components/DefaultTimings";
import DisplayCountdown from "../components/DisplayCountdown";
import DoneButton from "../components/DoneButton";
import ControlsPlusMinus from '../components/ControlsPlusMinus';

const Work = () => {
  return (
    <div className='verticalContainer'>
      <DisplayCountdown type='work'/>
      <div className="horizontalContainer">
        <DefaultTimings type='work' seconds={10}/>
        <DefaultTimings type='work' seconds={20}/>
        <DefaultTimings type='work' seconds={60}/>
      </div>
      <div className="horizontalContainer controlPlusMinusContainer">
        <ControlsPlusMinus type="work" sign="+1" />
        <ControlsPlusMinus type="work" sign="-1" />
      </div>
      <DoneButton/>
    </div>
  )
}

export default Work