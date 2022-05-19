import React, { useContext } from 'react'
import FreeTabataContext from "../context/FreeTabataContext";



const DisplayCycle = ({type}) => {

  const context = useContext(FreeTabataContext);
  const cycle = context[type];

  return (
    <div className={`${type} display`}>
        <div className=''>{type.toUpperCase()}</div>
        <div className="countdownDisplayItems">{String(cycle).padStart(2,'0')}</div>
        {console.log(String(cycle).padStart(2,'0'))}
    </div>
  )
}

export default DisplayCycle