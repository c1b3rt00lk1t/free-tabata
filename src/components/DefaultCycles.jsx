import React, { useContext } from 'react'
import FreeTabataContext from "../context/FreeTabataContext";

const DefaultCycles = ({type,number}) => {
  const {handleSet} = useContext(FreeTabataContext);
  const handleClick = handleSet(type)(number);
  
  return (
      <div onClick={handleClick} className='defaultBtn clickable nonSelectable'>{`${String(number).padStart(2,'0')}`}</div>
    )
}

export default DefaultCycles