import React, {useContext} from 'react'
import FreeTabataContext from "../context/FreeTabataContext";

const StartStopButton = () => {
  const {generalMode, handleStartStop} = useContext(FreeTabataContext);
  const mapper = ['start','stop'];
 
  return (
    <div onClick={handleStartStop}className='startStopBtn  clickable nonSelectable'>{mapper[+generalMode]}</div>
  )
}

export default StartStopButton