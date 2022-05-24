import React, { useContext } from 'react'
import FreeTabataContext from "../context/FreeTabataContext";



const DisplayCountdown = ({type}) => {

  const context = useContext(FreeTabataContext);
  const countdown = context[type].current;
  const generalMode = context['generalMode'];
  const flickerOnOff = context.flickerOnOff;

  return (
    <div className={`${type} display nonSelectable ${(type === 'work' && generalMode && flickerOnOff) && 'animate-flicker'}`}>
        <div className=''>{type.toUpperCase()}</div>
        <div className={`countdownDisplayItems `}>{`${String(Math.floor(countdown/60)).padStart(2,'0')}:${String(countdown%60).padStart(2,'0')}`}</div>
    </div>
  )
}

export default DisplayCountdown