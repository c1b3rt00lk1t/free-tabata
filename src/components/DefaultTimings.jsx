import React, { useContext } from 'react'
import FreeTabataContext from "../context/FreeTabataContext";

const DefaultTimings = ({type,seconds}) => {
  const {handleSet} = useContext(FreeTabataContext);
  const handleClick = handleSet(type)(seconds);
  
  return (
      <div onClick={handleClick} className='defaultBtn clickable nonSelectable'>{`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`}</div>
    )
}

export default DefaultTimings