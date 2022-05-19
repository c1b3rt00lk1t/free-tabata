import React, { useContext } from 'react'
import FreeTabataContext from "../context/FreeTabataContext";


const ControlsPlusMinus = ({ type, sign }) => {

  const context = useContext(FreeTabataContext);
  const result = context[type]+ +sign;
console.log(type)
  const number = () => {
    if (type === 'tabatas' || type === 'cycles'){
      return result <= 1 ? 1 : result;
    } else {
      return result <= 0 ? 0 : result;
    }
  }
  const handleClick = context[`handleSet${type}`](number());
  
  
  return ( <div className='controlPlusMinusBtn' onClick={handleClick}>{sign[0]}</div> );
};

export default ControlsPlusMinus;
