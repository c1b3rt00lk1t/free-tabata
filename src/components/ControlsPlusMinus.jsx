import React, { useContext } from 'react'
import FreeTabataContext from "../context/FreeTabataContext";


const ControlsPlusMinus = ({ type, sign }) => {

  const context = useContext(FreeTabataContext);
  const handleClick = context[`handleSet${type}`](context[type] + +sign);
  
  
  return ( <div className='controlPlusMinusBtn' onClick={handleClick}>{sign[0]}</div> );
};

export default ControlsPlusMinus;
