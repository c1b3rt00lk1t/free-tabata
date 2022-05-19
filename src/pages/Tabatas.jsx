import React from 'react'
import DefaultCycles from '../components/DefaultCycles';
import DisplayCycle from "../components/DisplayCycle";
import DoneButton from "../components/DoneButton";
import ControlsPlusMinus from '../components/ControlsPlusMinus';

const Tabatas = () => {
  return (
    <div className='verticalContainer'>
      <DisplayCycle type='tabatas'/>
      <div className="horizontalContainer">
      <DefaultCycles type='tabatas' number={1}/>
      <DefaultCycles type='tabatas' number={5}/>
      <DefaultCycles type='tabatas' number={10}/>

      </div>
      <div className="horizontalContainer controlPlusMinusContainer">
        <ControlsPlusMinus type="tabatas" sign="+1" />
        <ControlsPlusMinus type="tabatas" sign="-1" />
      </div>
      <DoneButton/>
    </div>
  )
}

export default Tabatas