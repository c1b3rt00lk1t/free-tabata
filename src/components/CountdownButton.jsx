import React, { useContext } from 'react'
import FreeTabataContext from '../context/FreeTabataContext'

const CountdownButton = ({type}) => {

  const context = useContext(FreeTabataContext);
  const countdown = context[type];
  return (
    <div>{countdown}</div>
  )
}

export default CountdownButton