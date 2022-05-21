import React, {useContext} from 'react'
import {BsFillQuestionCircleFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import FreeTabataContext from '../context/FreeTabataContext';

const AboutButton = () => {
  // Getting the type from the context
  const {generalMode} = useContext(FreeTabataContext);
  // Preparing to navigate in case of a click
  const navigate = useNavigate();
  const handleNavigate = () => {
    !generalMode && navigate(`/about`)
  };



  return (
    <div onClick={handleNavigate} className="misc">
    <BsFillQuestionCircleFill color='grey' size={33}/>
  </div>
  )
}

export default AboutButton