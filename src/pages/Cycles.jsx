import React from 'react'
import DefaultCycles from '../components/DefaultCycles';
import DisplayCycle from "../components/DisplayCycle";
import DoneButton from "../components/DoneButton";
import ControlsPlusMinus from '../components/ControlsPlusMinus';

const Cycles = () => {
  return (
    <div className='verticalContainer'>
    <DisplayCycle type='cycles'/>
    <div className="horizontalContainer">
    <DefaultCycles type='cycles' number={1}/>
      <DefaultCycles type='cycles' number={8}/>
      <DefaultCycles type='cycles' number={12}/>
    </div>
    <div className="horizontalContainer controlPlusMinusContainer">
        <ControlsPlusMinus type="cycles" sign="+1" />
        <ControlsPlusMinus type="cycles" sign="-1" />
      </div>
    <DoneButton/>
  </div>

  )
}

export default Cycles