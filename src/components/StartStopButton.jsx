import React, {useContext} from 'react'
import FreeTabataContext from "../context/FreeTabataContext";

const StartStopButton = () => {
  const {generalMode} = useContext(FreeTabataContext);
  const mapper = ['start','stop','stop'];
 
  return (
    <div className='startStopBtn'>{mapper[generalMode]}</div>
  )
}

export default StartStopButton