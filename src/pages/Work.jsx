import React from 'react'
import DefaultTimings from "../components/DefaultTimings";
import Display from "../components/Display";
import DoneButton from "../components/DoneButton";

const Work = () => {
  return (
    <div className='verticalContainer'>
      <Display type='work'/>
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