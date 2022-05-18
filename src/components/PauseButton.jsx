import React, { useContext } from 'react'
import {BsPauseCircle, BsPlayCircle} from 'react-icons/bs'
import FreeTabataContext from "../context/FreeTabataContext";

const PauseButton = () => {
  const {pauseMode,handleStartPause} = useContext(FreeTabataContext);

  return (
    <div onClick={handleStartPause} className="misc">
    {!pauseMode ? <BsPauseCircle color='grey' size={33}/> : <BsPlayCircle color='grey' size={33}/> }
  </div>
  )
}

export default PauseButton