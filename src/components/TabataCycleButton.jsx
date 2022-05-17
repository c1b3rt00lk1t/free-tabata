import React, {useContext} from 'react'
import FreeTabataContext from "../context/FreeTabataContext";

const TabataCycleButton = ({type}) => {
  const context = useContext(FreeTabataContext);
  const number = context[type];

  return (
    <div className={`${type} `}>
        <div className="tabataCycleNumber">{`${String(number).padStart(2,'0')}`}</div>
        <div className="">{type.toUpperCase()}</div>
    </div>
  )
}

export default TabataCycleButton