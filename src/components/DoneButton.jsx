import React from 'react'
import { useNavigate } from 'react-router-dom'

const DoneButton = () => {
  // Preparing to navigate back to Main page in case of a click
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/')
  }


  return (
    <div onClick={handleNavigate} className='doneBtn clickable nonSelectable'>DONE</div>
  )
}

export default DoneButton