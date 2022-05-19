import React, {useContext} from 'react'
import FreeTabataContext from "../context/FreeTabataContext";
import { useNavigate } from 'react-router-dom'

const TabataCycleButton = ({type}) => {
  const context = useContext(FreeTabataContext);
  const number = context[type];

  // Preparing to navigate in case of a click
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${type}`)
  };

  return (
    <div onClick={handleNavigate} className={`${type} `}>
        <div className="tabataCycleNumber">{`${String(number).padStart(2,'0')}`}</div>
        <div className="">{type.toUpperCase()}</div>
    </div>
  )
}

export default TabataCycleButton