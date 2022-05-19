import React, { useContext } from 'react'
import FreeTabataContext from "../context/FreeTabataContext";

const DefaultCycles = ({type,number}) => {
  const context = useContext(FreeTabataContext);
  const handleClick = context[`handleSet${type}`](number);
  
  return (
      <div onClick={handleClick} className='defaultBtn'>{`${String(number).padStart(2,'0')}`}</div>
    )
}

export default DefaultCycles